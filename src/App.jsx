import { Provider } from 'react-redux';
import store from './redux/store';
import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';
import './App.css'; // Assuming specific styles if needed

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>To-Do List</h1>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
