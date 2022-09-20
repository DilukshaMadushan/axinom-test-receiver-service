"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.zipRouter = void 0;
const express_1 = __importDefault(require("express"));
const zipContent_controller_1 = require("../controllers/zipContent.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const zipRouter = express_1.default.Router();
exports.zipRouter = zipRouter;
zipRouter.route("/").post(auth_middleware_1.protect, zipContent_controller_1.saveZipContent).get(zipContent_controller_1.getAllZipContent);
