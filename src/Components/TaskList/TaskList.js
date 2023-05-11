import React, { useState } from "react";
import Task from "../Task/Task";
import style from "./TaskList.module.css";
const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [filter, setFilter] = useState("All");

  const handleAddTask = () => {
    if (title.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
  };

  const handleToggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Completed") return task.completed;
    if (filter === "Uncompleted") return !task.completed;
    return false;
  });

  return (
  
    <div className={style.taskList}>
      <div className={style.inputForm}>
        <div className={style.taskListTitle}>
        <h5 className={style.heading}>Add Task Here</h5>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={style.taskListDesc}>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      
      <div className={style.filterButton}>
        <h5 className={style.heading1}>Filter Your Task Here🔎</h5>
        <div className={style.mainbtn}>
          <button className={style.btn} onClick={() => setFilter("All")}>All</button>
          <button className={style.btn} onClick={() => setFilter("Completed")}>Completed</button>
          <button className={style.btn} onClick={() => setFilter("Uncompleted")}>Uncompleted</button>
        </div>
        <div className={style.filterdTask}>

        {filteredTasks.map((task) => (
          <Task
          key={task.id}
          task={task}
          onToggleComplete={() => handleToggleComplete(task.id)}
          onDelete={() => handleDeleteTask(task.id)}
          />
          ))}
          </div>
      </div>
      </div>
  );
};

export default TaskList;
