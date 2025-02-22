import "dotenv/config";
import express from "express";
import cors from "cors";
import taskRouter from "./src/router/taskRouter.js";
import { connectToMongoDb } from "./src/config/dbConfig.js";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

const _dirname = path.resolve();

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

// SSR - server frontend using our node.js server
app.use("/", express.static(path.join(_dirname, "frontendBuild")));
// Task Routes
app.use("/api/tasks", taskRouter);

app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log("Server running successfully on http://localhost:" + PORT);
});
