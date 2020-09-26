import express, { Request, Response } from "express";
import cors from "cors";
import { getMostRecent, insertRecord, initDb } from "./db";
import { PORT } from "./settings";

const app = express();

app.use(cors());

app.get("/", async (req, res) => {
  const result = await getMostRecent();
  res.status(200).json({ ...result.rows[0] });
});

app.post("/", async (req, res) => {
  const result = await insertRecord("test");
  res.status(200).json({ ...result.rows[0] });
});

app.get("/init", async (req, res) => {
  const result = await initDb();
  res.status(200).json({ success: true });
});

app.get("/*", async (req, res) => {
  res.status(200).json({ working: "yes" });
});

app.listen(PORT, () => {
  console.log(`Server Started at Port, ${PORT}`);
});
