"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Please add a Name"],
    },
    password: {
        type: String,
        minlength: 5,
        select: false,
    },
    createdAt: {
        type: Date,
        defulat: Date.now,
    },
});
const User = mongoose_1.default.model("User", UserSchema);
exports.User = User;
