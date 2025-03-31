import { useState, useRef } from "react";
import "./App.css";

const useTasks = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const newTaskInput = useRef<HTMLInputElement | null>(null);

  function addTask() {
    if (!newTaskInput.current || !newTaskInput.current.value.trim()) return;

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
