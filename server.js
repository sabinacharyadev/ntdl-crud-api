import express from "express";
import { connectToMongoDb } from "./config/dbConfig.js";

const app = express();
const PORT = 3000;

app.use(express.json());

// Connect to mongoDb
connectToMongoDb();

app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log("Server running successfully on http://localhost:" + PORT);
});
