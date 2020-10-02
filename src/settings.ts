import dotenv from "dotenv";
dotenv.config();

export const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING || "";
export const DB_USER = process.env.DB_USER || "";
export const DB_PASSWORD = process.env.DB_PASSWORD || "";
export const DB_NAME = process.env.DB_NAME || "";
export const DB_SERVER = process.env.DB_SERVER || "";

export const PORT = process.env.PORT;
