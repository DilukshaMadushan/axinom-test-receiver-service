import crypto from "crypto";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Encrypt password using BCrypt
const encodePassword = async (password: string) => {
  const salt: any = await bcrypt.genSalt(10);
  const encodedPassowrd = await bcrypt.hash(password, salt);
  return encodedPassowrd;
};

// Sign JWT and return
const getSignedJwtToken = (id: number) => {
  const secret = process.env.JWT_SECRET || "secret123";
  return jwt.sign({ id: id }, secret, {
    expiresIn: process.env.JWT_EXPIRE || "30d",
  });
};

// Match user enterd password to hashed password in database
const matchPassword = async (enterdPassword: string, dbPassword: string) => {
  return await bcrypt.compare(enterdPassword, dbPassword);
};

export { encodePassword, getSignedJwtToken, matchPassword };
