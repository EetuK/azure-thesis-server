import dotenv from "dotenv";
dotenv.config();

export const dbConnectionString = process.env.DB_CONNECTION_STRING;
export const PORT = process.env.PORT;
