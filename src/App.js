import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [editedTask, setEditedTask] = useState(null);

  const addTask = () => {
    if (taskInput.trim() === '') return;
    
    if (editedTask !== null) {
      // Edit existing task
      const updatedTasks = [...tasks];
      updatedTasks[editedTask] = taskInput;
      setTasks(updatedTasks);
      setEditedTask(null);
    } else {
      // Add new task
      setTasks([...tasks, taskInput]);
    }
    
    setTaskInput('');
  };

  const editTask = (index) => {
    setTaskInput(tasks[index]);
    setEditedTask(index);
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = `✅ ${tasks[index]}`;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <div className="task-input">
        <input
          type="text"
          placeholder="Add a new task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={addTask}>{editedTask !== null ? 'Edit' : 'Add'}</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button onClick={() => editTask(index)}>Edit</button>
            <button onClick={() => completeTask(index)}>Complete</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
