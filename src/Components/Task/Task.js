import React from 'react';
import {MdDeleteForever} from "react-icons/md"
import style from "./Task.module.css"
const Task = ({ task, onToggleComplete, onDelete }) => {
  const { title, description, completed } = task;

  return (
    
    <div className={style.taskItem}>
      <div> <input
        type="checkbox"
        checked={completed}
        onChange={onToggleComplete}
      /></div>
     
      <div className={style.tasks}>
      <span className={style.title}>Title:-{title}</span>
      <span className={style.description}>Description:-{description}</span>

      </div>
<div>
      <button className={style.btn} onClick={onDelete}><MdDeleteForever/></button></div>
    </div>
      
  );
};

export default Task;
