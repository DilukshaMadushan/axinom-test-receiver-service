"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const logger_util_1 = require("../utils/logger.util");
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const mongoUrl = process.env.MONGO_URI;
    if (!mongoUrl) {
        const conn = yield mongoose_1.default.connect("mongodb+srv://diluksha:diluksha123@cluster0.kgiqf6o.mongodb.net/testdb?retryWrites=true&w=majority");
        logger_util_1.logger.info(`Mongo DB connected to configured DB url: ${conn.connection.host}`);
    }
    else {
        const conn = yield mongoose_1.default.connect(mongoUrl);
        logger_util_1.logger.info(`Mongo DB connected: ${conn.connection.host}`);
    }
});
exports.connectDB = connectDB;
