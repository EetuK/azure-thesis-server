import logger from "morgan";
import express from "express";
import cookieParser from "cookie-parser";
import indexRouter from "./routes/index";
import cors from "cors";
import { initDb } from "./db";
const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/v1", indexRouter);

console.log("joo");
initDb();
console.log("jee");

export default app;
