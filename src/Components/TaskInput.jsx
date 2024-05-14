import { useDispatch } from 'react-redux';
import { addTask } from '../redux/slices/taskSlice';
// import './TaskInput.css'; // Assuming specific styles if needed
import { useState } from 'react';
const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <div className="task-input">
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        onKeyPress={(e) => e.key === 'Enter' && handleAddTask()} 
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
