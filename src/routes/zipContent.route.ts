import express from "express";
import {
  saveZipContent,
  getAllZipContent,
} from "../controllers/zipContent.controller";
import { protect } from "../middleware/auth.middleware";

const zipRouter = express.Router();

zipRouter.route("/").post(protect, saveZipContent).get(getAllZipContent);

export { zipRouter };
