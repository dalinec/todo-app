import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodos = createAsyncThunk('todos/todosLoading', async () => {
  const url = 'https://api.npoint.io/8f25f32b5ee71bc7666d';

  const getTodos = await axios({
    method: 'get',
    url: url,
  }).then((response) => {
    if (response.status !== 200) {
      console.log('Error, no fetched data');
      return {};
    } else {
      console.log('Success, data are fetched');
      return response.data;
    }
  });
  return getTodos;
});

const initialState = {
  todos: [],
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
