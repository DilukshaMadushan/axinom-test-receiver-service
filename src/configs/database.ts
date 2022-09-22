import mongoose from "mongoose";
import { logger } from "../utils/logger.util";

const connectDB = async () => {
  const mongoUrl: any = process.env.MONGO_URI;
  if (!mongoUrl) {
    const conn = await mongoose.connect(
      "mongodb+srv://diluksha:diluksha123@cluster0.kgiqf6o.mongodb.net/testdb?retryWrites=true&w=majority"
    );
    logger.info(
      `Mongo DB connected to configured DB url: ${conn.connection.host}`
    );
  } else {
    const conn = await mongoose.connect(mongoUrl);
    logger.info(`Mongo DB connected: ${conn.connection.host}`);
  }
};

export { connectDB };
