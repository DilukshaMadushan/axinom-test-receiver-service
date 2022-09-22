import { Request, Response, NextFunction } from "express";
import { uploads } from "../models/uploads.model";
import { logger } from "../utils/logger.util";

const saveZipContent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.info("Reuest invoked, Save zip content of ", req.body.uploadOwner);
  const newUpload = await uploads.create({
    uploadOwner: req.body.uploadOwner,
    data: JSON.stringify(req.body),
  });

  logger.info("Operation successfull");
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({
    success: true,
    data: "Operation successfull",
  });
};

const getAllZipContent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.info("Request invoked, get all uploads");
  const newUpload: any = await uploads.find();

  const output: any = [];
  for (let item of newUpload) {
    output.push(JSON.parse(item.data));
  }
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({
    success: true,
    data: output,
  });
};

export { saveZipContent, getAllZipContent };
