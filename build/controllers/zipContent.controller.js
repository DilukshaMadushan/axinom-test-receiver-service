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
exports.getAllZipContent = exports.saveZipContent = void 0;
const uploads_model_1 = require("../models/uploads.model");
const logger_util_1 = require("../utils/logger.util");
const saveZipContent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    logger_util_1.logger.info("Reuest invoked, Save zip content of ", req.body.uploadOwner);
    const newUpload = yield uploads_model_1.uploads.create({
        uploadOwner: req.body.uploadOwner,
        data: JSON.stringify(req.body),
    });
    logger_util_1.logger.info("Operation successfull");
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({
        success: true,
        data: "Operation successfull",
    });
});
exports.saveZipContent = saveZipContent;
const getAllZipContent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    logger_util_1.logger.info("Request invoked, get all uploads");
    const newUpload = yield uploads_model_1.uploads.find();
    const output = [];
    for (let item of newUpload) {
        output.push(JSON.parse(item.data));
    }
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({
        success: true,
        data: output,
    });
});
exports.getAllZipContent = getAllZipContent;
