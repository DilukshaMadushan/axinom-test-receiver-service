"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
const zipContent_route_1 = require("./routes/zipContent.route");
const auth_route_1 = require("./routes/auth.route");
const database_1 = require("./configs/database");
const error_middleware_1 = require("./middleware/error.middleware");
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
// Load environment variables
dotenv.config();
(0, database_1.connectDB)();
const app = (0, express_1.default)();
const port = 5001;
//allow cors
app.use((0, cors_1.default)());
//set the max body size
app.use(body_parser_1.default.json({ limit: "50mb" }));
//Accept json
app.use(express_1.default.json());
app.use("/api/v1/zip-content", zipContent_route_1.zipRouter);
app.use("/api/v1/auth", auth_route_1.authRouter);
app.use(error_middleware_1.errorHandler);
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
