import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask({ title, completed: false });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-control mb-2"
        placeholder="Add new task..."
      />
      <button type="submit" className="btn btn-success">Add Task</button>
    </form>
  );
};

export default AddTask;
