import TaskList from "./Components/TaskList/TaskList";
import style from "./App.module.css"
function App() {
  return (
    <div className={style.header}>
    <h1>Task Manager</h1>
    <TaskList/>
  </div>
  );
}

export default App;
