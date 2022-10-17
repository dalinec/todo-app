import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../types/todo';
import { RootState } from '../store/rootReducer';

export const fetchAsyncTodos = createAsyncThunk(
  'todos/fetchAsyncTodos',
  async () => {
    const response = await fetch('https://api.npoint.io/8f25f32b5ee71bc7666d');
    const fetchedTodos: Todo[] = await response.json();
    return fetchedTodos;
  }
);
const initialState = [
  {
    id: '1',
    title: 'Buy groceries',
    description: 'Buy milk, cola,bread',
    dueDate: '08/10/2022',
    time: '10:15 PM',
    completed: false,
  },
  {
    id: '2',
    title: 'Wash all dirty clothes',
    description: 'Remove the pink shirt',
    dueDate: '26/10/2022',
    time: '08:15 AM',
    completed: true,
  },
  {
    id: '3',
    title: 'Walk the dog',
    description: 'Go for a 30 min walk',
    dueDate: '12/11/2022',
    time: '09:45 PM',
    completed: false,
  },
  {
    id: '4',
    title: 'Cook dinner',
    description: 'Cook my favourite meal',
    dueDate: '03/12/2022',
    time: '18:15 AM',
    completed: true,
  },
];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      const todo = {
        id: (Math.random() * 100).toString(),
        title: action.payload.title,
        description: action.payload.description,
        dueDate: action.payload.dueDate,
        time: action.payload.time,
        completed: action.payload.completed,
      };
      state.push(todo);
    },
    removeItem: (state, action: PayloadAction<Todo>) => {
      return state.filter((item) => item.id !== action.payload.id);
    },

    toggleTodo(state, action: PayloadAction<Todo>) {
      let todo = state.find((todo) => todo.id === action.payload.id);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    // extraReducers: (builder) => {
    //   builder.addCase(fetchAsyncTodos.pending, (state) => {
    //     return { ...state, isLoading: true, error: '' };
    //   });
    //   builder.addCase(fetchAsyncTodos.fulfilled, (state, { payload }) => {
    //     return { ...state, todo: payload, isLoading: false, error: '' };
    //   });
    //   builder.addCase(fetchAsyncTodos.rejected, (state, { payload }) => {
    //     if (payload) state.error = payload as string;
    //   });
    // },
  },
});

export const { addTodo, removeItem, toggleTodo } = todoSlice.actions;

export const todosData = (state: RootState) => state.todos;

export default todoSlice.reducer;
