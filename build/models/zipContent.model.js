"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.zipContents = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const zipContentSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
    },
    isDir: {
        type: Boolean,
        default: true,
    },
    dataBase64: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    // zipFile: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "zipFiles",
    //   required: true,
    // },
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
const zipContents = mongoose_1.default.model("zipContents", zipContentSchema);
exports.zipContents = zipContents;
