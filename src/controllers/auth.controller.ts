import { Request, Response, NextFunction } from "express";
import { User } from "../models/User.model";
import { logger } from "../utils/logger.util";
import {
  encodePassword,
  matchPassword,
  getSignedJwtToken,
} from "../services/auth.service";
import { ErrorResponse } from "../utils/errorResponse.util";

const register = async (req: Request, res: Response, next: NextFunction) => {
  logger.info("Reuest invoked, Register");

  const { name, password } = req.body;

  // Check Fields
  if (!name || !password) {
    return next(new ErrorResponse("Name and Password is required", 400));
  }

  // Find existing User
  const existing_user = await User.findOne({ name: name });
  if (existing_user) {
    return next(new ErrorResponse("Sorry! name has already registerd", 400));
  } else {
    const encodedPassword = await encodePassword(password);

    // Create User
    const newUser = await User.create({
      name: name,
      password: encodedPassword,
    });

    logger.info("Operation successfull");
    res.setHeader("Content-Type", "application/json");
    res.status(201).json({
      success: true,
      data: "Operation successfull",
    });
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  logger.info("Reuest invoked, login");

  const { name, password } = req.body;

  //   Validate Email and Password
  if (!name || !password) {
    return next(new ErrorResponse("Please provide Mobile and Password", 400));
  }

  // Check for user
  const user = await User.findOne({ name: name }).select("+password");

  if (!user) {
    return next(new ErrorResponse("Invalid user", 401));
  }

  // check if password matches
  const isMatch = await matchPassword(password, user.password);

  if (!isMatch) {
    return next(new ErrorResponse("Invalid Credential", 401));
  }

  const token = getSignedJwtToken(user._id);

  logger.info("Operation successfull");
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({
    success: true,
    data: "Operation successfull",
    token: token,
  });
};

export { register, login };
