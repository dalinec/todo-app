import { useState, useEffect, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { Todo } from './types/todo';
import { useAppDispatch } from './features/store/store';
import { addTodo } from './features/slices/todoSlice';
import { fetchTodos } from './features/slices/fetchedTodoSlice';

const App = () => {
  const [fetchedTodos, setFetchedTodos] = useState()
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return <></>;
};
export default App;
