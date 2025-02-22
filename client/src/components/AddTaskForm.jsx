/* eslint-disable react/prop-types */
import { useState } from "react";
import { generateRandomId } from "../utility/generateRandomId";

const AddTaskForm = (props) => {
  const { setTaskList } = props;
  // can be used as single state also
  const [taskName, setTaskName] = useState("");
  const [taskTime, setTaskTime] = useState("");
  const handleOnSubmit = (event) => {
    event.preventDefault();
    //1. Build a task object
    const taskObject = {
      taskName: taskName,
      taskTime: taskTime,
      type: "entry",
      id: generateRandomId(),
    };

    // adding object to array
    setTaskList((prevState) => [...prevState, taskObject]);
    // clearing form fields
    setTaskName("");
    setTaskTime("");
  };

  //   Handle task name input change
  const handleOnTaskNameChanged = (event) => {
    setTaskName(event.target.value);
  };

  //   Handle task spent input change
  const handleOnTaskSpentChanged = (event) => {
    setTaskTime(parseInt(event.target.value));
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <div className="d-flex flex-column gap-4">
        <input
          type="text"
          className="form-control"
          placeholder="Enter task name"
          name="taskName"
          value={taskName}
          onChange={handleOnTaskNameChanged}
          required
        />

        <input
          type="number"
          className="form-control"
          placeholder="Enter time spent in hrs"
          name="taskTime"
          min="1"
          max="24"
          value={taskTime}
          onChange={handleOnTaskSpentChanged}
          required
        />

        <button className="btn btn-primary" type="submit">
          Add Task
        </button>
      </div>
    </form>
  );
};
export default AddTaskForm;
