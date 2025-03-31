import { useState, useRef } from "react";
import "./App.css";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const newTaskInput = useRef(null);

  function addTask() {
    const task = newTaskInput.current.value.trim();
    if (!task) return;

    setTasks([...tasks, newTaskInput.current.value]);
    newTaskInput.current.value = "";
  }

  return { tasks, addTask, newTaskInput };
};

function App() {
  const { tasks, addTask, newTaskInput } = useTasks();

  return (
    <div>
      <input data-testid="input-id" placeholder="Type here your task" ref={newTaskInput} defaultValue="" />
      <button data-testid="button-id" onClick={addTask}>
        Add a todo
      </button>
      <ul data-testid="ul-id">
        {tasks.map((task) => (
          <li>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
