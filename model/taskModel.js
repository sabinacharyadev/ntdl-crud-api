// This file has  functions to execute queries
import taskModel from "../schema/taskSchema";
// these are used by end points
// DATABASE OPERATIONS
// CRUD OPERATIONS -> TASK RESOURCES

// Read
export const getTasks = () => {
  return taskModel.find();
};

// Read one
export const getTask = (id) => {
  return taskModel.findById(id);
};

// Create

export const createTask = (taskObject) => {
  return taskModel(taskObject).save();
};

// Update

export const updateTask = (id, updatedData) => {
  return taskModel.findByIdAndUpdate(id, updatedData);
};

// Delete

export const deleteTask = (id) => {
  return taskModel.findByIdAndDelete(id);
};
