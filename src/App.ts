import express, { Request, Response } from "express";
import cors from "cors";
import { getMostRecent, insertRecord, initDb } from "./db";
import { PORT } from "./settings";

const app = express();

app.use(cors());

const init = async () => {
  await initDb();
};

init();

app.get("/", async (req, res) => {
  const result = await getMostRecent();
  res.status(200).json([...result.recordset]);
});

app.post("/", async (req, res) => {
  const result = await insertRecord("test");
  res.status(200).json([...result.recordset]);
});

app.get("/*", async (req, res) => {
  res.status(200).json({ working: "yes" });
});

app.listen(PORT, () => {
  console.log(`Server Started at Port, ${PORT}`);
});
