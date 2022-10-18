import { useState, FC } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../features/store/store';
import { toggleTodo } from '../../features/slices/todoSlice';
import { VisibilityFilter } from '../../features/slices/visibilityFilterSlice';
import { RootState } from '../../features/store/rootReducer';

import FilterOption from '../filterOption/filterOption';
import TodoItem from '../todoItem/todo-item.component';
import TodoForm from '../todoForm/todo-form.component';
import { Todo } from '../../types/todo';
import {
  MyContainer,
  MyList,
  MyTextField,
  ControlsContainer,
} from '../../App.styles';

const getVisibleTodos = (todos: Todo[], filter: VisibilityFilter) => {
  switch (filter) {
    case VisibilityFilter.ShowAll:
      return todos;
    case VisibilityFilter.ShowCompleted:
      return todos.filter((todo) => todo.completed);
    case VisibilityFilter.ShowActive:
      return todos.filter((todo) => !todo.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

interface Name {
  userName?: string;
}

const TodoList: FC<Name> = ({ userName }) => {
  const [search, setSearch]: [string, (search: string) => void] = useState('');
  const dispatch = useAppDispatch();
  const todos = useSelector((state: RootState) =>
    getVisibleTodos(state.todos, state.visibilityFilter)
  );

  const handleChange = (e: { target: { value: string } }) => {
    setSearch(e.target.value);
  };


  return (
    <MyContainer>
      <h2>{userName}</h2>
      <ControlsContainer>
        <FilterOption />
        <MyTextField
          id='outlined-basic'
          size='small'
          onChange={handleChange}
          label='Search'
          variant='outlined'
        />
      <TodoForm />
      </ControlsContainer>

      <MyList>
        {todos.map((todo) => {
          if (
            search === '' ||
            todo.title.toLowerCase().includes(search.toLowerCase())
          ) {
            return (
              <TodoItem
                key={todo.title}
                todo={todo}
                onClick={() => dispatch(toggleTodo(todo))}
              />
            );
          }
          return null;
        })}
      </MyList>
    </MyContainer>
  );
};

export default TodoList;
