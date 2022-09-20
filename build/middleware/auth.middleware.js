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
exports.protect = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errorResponse_util_1 = require("../utils/errorResponse.util");
const User_model_1 = require("../models/User.model");
// Protect routes
const protect = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let token;
    if (req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }
    // Make sure token exists
    if (!token) {
        return next(new errorResponse_util_1.ErrorResponse("Not authorize to access this route", 401));
    }
    try {
        //   Verify token
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || "secret123");
        console.log("token ", decoded);
        const user = yield User_model_1.User.findById(decoded.id);
        console.log(user);
        next();
    }
    catch (error) {
        return next(new errorResponse_util_1.ErrorResponse("Not authorize to access this route", 401));
    }
});
exports.protect = protect;
