import mongoose from "mongoose";

// db schema
const TaskSchema = mongoose.Schema({
  name: {
    // rules for fields
    type: String,
    required: true,
  },
  timeToComplete: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    default: "Entry",
  },
  difficulty: {
    type: String,
    default: "Easy",
  },
  priority: {
    type: String,
    default: "Low",
  },
});
// task is set in database as tasks
const taskModel = mongoose.model("task", TaskSchema);
export default taskModel;
