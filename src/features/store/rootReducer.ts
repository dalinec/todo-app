import { combineReducers } from '@reduxjs/toolkit';

import todos from '../slices/todoSlice';
import visibilityFilter from '../slices/visibilityFilterSlice';
import fetchedTodos from '../slices/fetchedTodoSlice';

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  fetchedTodos,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
