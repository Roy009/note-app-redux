import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './redux/slices/taskSlice';
import App from './App';
import { loadState, saveState } from './localStorage';
import './index.css';

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    tasks: taskReducer
  },
  preloadedState
});

store.subscribe(() => {
  saveState(store.getState().tasks);
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)