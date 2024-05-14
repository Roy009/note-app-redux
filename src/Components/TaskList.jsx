import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../redux/slices/taskSlice';
// import './TaskList.css'; // Assuming specific styles if needed

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} className={task.completed ? 'completed' : ''}>
          <span onClick={() => dispatch(toggleTask(index))} className="task-text">
            {task.text}
          </span>
          <button 
            className="delete-btn"
            onClick={() => dispatch(deleteTask(index))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
