import { useEffect, useState } from "react";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import Header from "./components/Header";
import TaskListItem from "./components/TaskListItem";
import TotalTime from "./components/TotalTime";

function App() {
  const storedTaskList = JSON.parse(localStorage.getItem("taskList")) || [];
  const [taskList, setTaskList] = useState(storedTaskList);

  const entryTypeTask = taskList.filter((task) => task.type === "entry");
  const unwantedTypeTask = taskList.filter((task) => task.type === "unwanted");

  // Store to local storage
  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  // Function to switch task type
  const switchTaskType = (taskId) => {
    const updatedTaskList = taskList.map((task) => {
      if (task.id === taskId) {
        task.type = task.type === "entry" ? "unwanted" : "entry";
      }
      return task;
    });
    setTaskList(updatedTaskList);
  };

  // Function to delete task type
  const deleteTask = (taskId) => {
    const updatedTaskList = taskList.filter((task) => task.id != taskId);
    setTaskList(updatedTaskList);
  };

  return (
    <>
      {/* <!----Title section--> */}
      <Header />
      <section>
        {/* <!----Body Of Our Application-----> */}
        <div className="shadow-lg border p-4 rounded">
          {/* <!---First Row--> */}
          <div className="row gap-2">
            {/* <!--First Column--> */}
            <div className="col border p-4 rounded align-self-center">
              {/* <!--Form to collect user's input i.e task details--> */}
              <AddTaskForm setTaskList={setTaskList} />
            </div>
            {/* <!--Second Column--> */}
            <div className="col border p-4 rounded">
              {/* <!---All Task List--> */}
              <h3 className="text-center">Entry Task List</h3>

              <div
                className="px-4"
                style={{ height: `50vh`, overflowY: `auto` }}
              >
                {/* <!---Table to display task list--> */}
                <table className="table table-hover border">
                  {/* <!---The table body content will be added by JS || adding rows from JS--> */}
                  <tbody>
                    {entryTypeTask.map((entryType) => (
                      <TaskListItem
                        key={entryType.id}
                        task={entryType}
                        switchTaskType={switchTaskType}
                        deleteTask={deleteTask}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* <!--Third Column--> */}
            <div className="col border p-4 rounded">
              {/* <!---All Task List--> */}
              <h3 className="text-center">Unwanted Task List</h3>

              <div
                className="px-4"
                style={{ height: `50vh`, overflowY: `auto` }}
              >
                {/* <!---Table to display unwanted task list--> */}
                <table className="table table-hover border">
                  {/* <!---The table body content will be added by JS || adding rows from JS--> */}
                  <tbody>
                    {unwantedTypeTask.map((unwantedType) => (
                      <TaskListItem
                        key={unwantedType.id}
                        task={unwantedType}
                        switchTaskType={switchTaskType}
                        deleteTask={deleteTask}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* <!---Second Row--> */}
          <div className="row gap-2 mt-4">
            {/* <!--First Column--> */}
            <div className="col border fw-bold alert alert-primary">
              Total Time in a Day: <span>24</span>
            </div>
            {/* <!--Second Column--> */}
            <div className="col border fw-bold alert alert-success">
              <TotalTime taskList={taskList} taskType="entry" />
            </div>
            {/* <!--Third Column--> */}
            <div className="col border fw-bold alert alert-danger">
              <TotalTime taskList={unwantedTypeTask} taskType="unwanted" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
