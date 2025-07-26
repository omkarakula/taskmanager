import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskItem = ({ task }) => {
  const { deleteTask, toggleComplete } = useContext(TaskContext);

  return (
    <div className={`card mb-2 ${task.completed ? 'opacity-75' : ''}`}>
      <div className="card-body d-flex justify-content-between align-items-center">
        <span className={`fs-5 ${task.completed ? 'text-decoration-line-through text-muted' : ''}`}>{task.title}</span>
        <div>
          <button className="btn btn-primary btn-sm me-2" onClick={() => toggleComplete(task.id)}>
            {task.completed ? 'Undo' : 'Complete'}
          </button>
          <button className="btn btn-danger btn-sm" onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;