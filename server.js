import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());

// servir frontend
app.use(express.static(path.join(__dirname, "public")));

// conexao mysql
const db = await mysql.createConnection({
  host: "",
  port: "",
  user: "",
  password: "",
  database: "r"
});

// endpoint
app.get("/tasks", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM tasks");
  res.json(rows);
});

// subir servidor
app.listen(3000, () => console.log("Rodando na porta 3000"));
