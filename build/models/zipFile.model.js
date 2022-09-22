"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.zipFiles = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const zipFileSchema = new mongoose_1.default.Schema({
    folderName: {
        type: String,
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    // },
    // zipContents: [
    //   {
    //     type: mongoose.Types.ObjectId,
    //     ref: "zipContents",
    //   },
    // ],
    // upload: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "uploads",
    //   required: true,
    // },
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
const zipFiles = mongoose_1.default.model("zipFile", zipFileSchema);
exports.zipFiles = zipFiles;
