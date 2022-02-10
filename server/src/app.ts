import express from "express";
import config from "config";
import mongoose from "mongoose";
import router from "../routes/auth.routes";

const app = express();
const PORT = config.get("port") || 8080;

app.use(express.json());

app.use("/", router);

async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"));    
    app.get("/", (_req, res) => {
      res.send(`Hello, it"s me! ${router} Hi`);
    });
    app.listen(PORT, () => {
      return console.log(`server is listening on ${PORT}`);
    });
  } catch (error: any) {
    console.log("Server error", error.message);
    process.exit(1);
  }
}

start();
