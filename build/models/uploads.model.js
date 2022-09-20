"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploads = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const uploadSchema = new mongoose_1.default.Schema({
    uploadOwner: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    data: {
        type: String,
    },
    // zipFiles: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "zipFile",
    //   },
    // ],
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
const uploads = mongoose_1.default.model("uploads", uploadSchema);
exports.uploads = uploads;
