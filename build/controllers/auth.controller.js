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
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const User_model_1 = require("../models/User.model");
const logger_util_1 = require("../utils/logger.util");
const auth_service_1 = require("../services/auth.service");
const errorResponse_util_1 = require("../utils/errorResponse.util");
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    logger_util_1.logger.info("Reuest invoked, Register");
    const { name, password } = req.body;
    // Check Fields
    if (!name || !password) {
        return next(new errorResponse_util_1.ErrorResponse("Name and Password is required", 400));
    }
    // Find existing User
    const existing_user = yield User_model_1.User.findOne({ name: name });
    if (existing_user) {
        return next(new errorResponse_util_1.ErrorResponse("Sorry! name has already registerd", 400));
    }
    else {
        const encodedPassword = yield (0, auth_service_1.encodePassword)(password);
        // Create User
        const newUser = yield User_model_1.User.create({
            name: name,
            password: encodedPassword,
        });
        logger_util_1.logger.info("Operation successfull");
        res.setHeader("Content-Type", "application/json");
        res.status(201).json({
            success: true,
            data: "Operation successfull",
        });
    }
});
exports.register = register;
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    logger_util_1.logger.info("Reuest invoked, login");
    const { name, password } = req.body;
    //   Validate Email and Password
    if (!name || !password) {
        return next(new errorResponse_util_1.ErrorResponse("Please provide Mobile and Password", 400));
    }
    // Check for user
    const user = yield User_model_1.User.findOne({ name: name }).select("+password");
    if (!user) {
        return next(new errorResponse_util_1.ErrorResponse("Invalid user", 401));
    }
    // check if password matches
    const isMatch = yield (0, auth_service_1.matchPassword)(password, user.password);
    if (!isMatch) {
        return next(new errorResponse_util_1.ErrorResponse("Invalid Credential", 401));
    }
    const token = (0, auth_service_1.getSignedJwtToken)(user._id);
    logger_util_1.logger.info("Operation successfull");
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({
        success: true,
        data: "Operation successfull",
        token: token,
    });
});
exports.login = login;
