import "dotenv/config";
import express from "express";
import cors from "cors";
import taskRouter from "./src/router/taskRouter.js";
import { connectToMongoDb } from "./src/config/dbConfig.js";

const app = express();
const PORT = process.env.PORT || 3000;

// middleware to parse data
app.use(express.json());

// define config for cors
const corsOption = {
  credential: true,
  origin: true, // is an array with the list of whitelisted domains
};

app.use(cors(corsOption));
// Connect to mongoDb
connectToMongoDb();

// Task Routes
app.use("/api/tasks", taskRouter);

app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log("Server running successfully on http://localhost:" + PORT);
});
