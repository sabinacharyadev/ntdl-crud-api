import express from "express";
import taskRouter from "./src/router/taskRouter.js";
import { connectToMongoDb } from "./src/config/dbConfig.js";

const app = express();
const PORT = 3000;

// middleware to parse data
app.use(express.json());

// Connect to mongoDb
connectToMongoDb();

// Task Routes
app.use("/api/tasks", taskRouter);

app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log("Server running successfully on http://localhost:" + PORT);
});
