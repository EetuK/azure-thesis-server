import express from "express";
import { getMostRecent, insertRecord, initDb } from "../db";

const indexRouter = express.Router();

indexRouter.get("/", async (req, res) => {
  const result = await getMostRecent();
  res.status(200).json({ ...result.rows[0] });
});

indexRouter.post("/", async (req, res) => {
  const result = await insertRecord();
  res.status(200).json({ ...result.rows[0] });
});

indexRouter.get("/init", async (req, res) => {
  const result = await initDb();
  res.status(200).json({ success: true });
});

indexRouter.get;

export default indexRouter;
