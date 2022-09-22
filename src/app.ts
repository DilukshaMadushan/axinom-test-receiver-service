import express, { Application, Request, Response } from "express";
import * as dotenv from "dotenv";
import { zipRouter } from "./routes/zipContent.route";
import { authRouter } from "./routes/auth.route";
import { connectDB } from "./configs/database";
import { errorHandler } from "./middleware/error.middleware";
import cors from "cors";
import bodyParser from "body-parser";

// Load environment variables
dotenv.config();

connectDB();

const app: Application = express();
const port: number = 5001;

//allow cors
app.use(cors());

//set the max body size
app.use(bodyParser.json({ limit: "50mb" }));

//Accept json
app.use(express.json());

app.use("/api/v1/zip-content", zipRouter);
app.use("/api/v1/auth", authRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
