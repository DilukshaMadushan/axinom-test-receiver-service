import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { ErrorResponse } from "../utils/errorResponse.util";
import { User } from "../models/User.model";

// Protect routes
const protect = async (req: Request, res: Response, next: NextFunction) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  // Make sure token exists
  if (!token) {
    return next(new ErrorResponse("Not authorize to access this route", 401));
  }

  try {
    //   Verify token
    const decoded: any = jwt.verify(
      token,
      process.env.JWT_SECRET || "secret123"
    );
    console.log("token ", decoded);
    const user = await User.findById(decoded.id);
    console.log(user);

    next();
  } catch (error) {
    return next(new ErrorResponse("Not authorize to access this route", 401));
  }
};

export { protect };
