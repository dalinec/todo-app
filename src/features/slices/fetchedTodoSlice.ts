import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Todo } from '../../types/todo';
import axios from 'axios';

// export const fetchTodos = createAsyncThunk('todos/todosLoading', async () => {
//   const url = 'https://api.npoint.io/8f25f32b5ee71bc7666d';

//   const getTodos: Todo = await axios({
//     method: 'get',
//     url: url,
//   }).then((response) => {
//     if (response.status !== 200) {
//       console.log('Error, no fetched data');
//       return {};
//     } else {
//       console.log('Success, data are fetched');
//       console.log(response.data);
//       return response.data;
//     }
//   });
//   return getTodos;
// });

export const fetchTodos = createAsyncThunk('todos/todosLoading', async () => {
  const response = await fetch('https://api.npoint.io/8f25f32b5ee71bc7666d');
  const data: Todo[] = await response.json();
  console.log(data);
  return data;
});

const initialState = {
  todos: [] as Todo[],
  loading: false,
  error: {},
};

const fetchedTodosSlice = createSlice({
  name: 'fetchedTodos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      console.log('Pending');
      return { ...state, loading: true, error: {} };
    });
    builder.addCase(fetchTodos.fulfilled, (state, { payload }) => {
      console.log('Fetched');
      return { ...state, data: payload, loading: false, error: {} };
    });
    builder.addCase(fetchTodos.rejected, (state, { payload }) => {
      console.log('Error');
      if (payload) state.error = payload as string;
    });
  },
});

export default fetchedTodosSlice.reducer;
