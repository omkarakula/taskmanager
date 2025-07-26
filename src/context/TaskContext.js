import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/tasks')
      .then(response => setTasks(response.data));
  }, []);

  const addTask = (task) => {
    axios.post('http://localhost:5000/tasks', task)
      .then(response => setTasks([...tasks, response.data]));
  };

  const deleteTask = (id) => {
    axios.delete(`http://localhost:5000/tasks/${id}`)
      .then(() => setTasks(tasks.filter(task => task.id !== id)));
  };

  const toggleComplete = (id) => {
    const task = tasks.find(t => t.id === id);
    axios.patch(`http://localhost:5000/tasks/${id}`, { completed: !task.completed })
      .then(() => {
        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
      });
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleComplete }}>
      {children}
    </TaskContext.Provider>
  );
};