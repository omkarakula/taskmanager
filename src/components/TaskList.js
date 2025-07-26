import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      {tasks.length ? tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      )) : <p className="text-muted">No Tasks Found!</p>}
    </div>
  );
};

export default TaskList;