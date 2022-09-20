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
exports.matchPassword = exports.getSignedJwtToken = exports.encodePassword = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Encrypt password using BCrypt
const encodePassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield bcryptjs_1.default.genSalt(10);
    const encodedPassowrd = yield bcryptjs_1.default.hash(password, salt);
    return encodedPassowrd;
});
exports.encodePassword = encodePassword;
// Sign JWT and return
const getSignedJwtToken = (id) => {
    const secret = process.env.JWT_SECRET || "secret123";
    return jsonwebtoken_1.default.sign({ id: id }, secret, {
        expiresIn: process.env.JWT_EXPIRE || "30d",
    });
};
exports.getSignedJwtToken = getSignedJwtToken;
// Match user enterd password to hashed password in database
const matchPassword = (enterdPassword, dbPassword) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcryptjs_1.default.compare(enterdPassword, dbPassword);
});
exports.matchPassword = matchPassword;
