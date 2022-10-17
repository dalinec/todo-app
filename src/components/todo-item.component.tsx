import { FC } from 'react';
import { Todo } from '../types/todo';
import { removeItem } from '../features/slices/todoSlice';
import { useAppDispatch } from '../features/store/store';

import { ListItemText } from '@mui/material';
import {
  Paragraph,
  MyListItem,
  StatusChip,
  UtilChipsContainer,
  UtilsChip,
} from '../App.styles';

interface Props {
  todo: Todo;
  onClick: () => any;
}

const TodoItem: FC<Props> = ({ todo, onClick }) => {
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(removeItem(todo));
  };

  return (
    <MyListItem>
      <ListItemText
        primary={todo.title}
        secondary={
          <>
            {`Due: ${todo.dueDate}, ${todo.time}`}
            <StatusChip
              label={todo.completed === false ? 'Not Completed' : 'Completed'}
              color={todo.completed === false ? 'error' : 'success'}
            ></StatusChip>
          </>
        }
      ></ListItemText>
      <Paragraph variant='body1'>{todo.description}</Paragraph>
      <UtilChipsContainer>
        <UtilsChip onClick={onClick} label='&#10004;' color='primary' />
        <UtilsChip onClick={handleRemove} label='&#128465;' color='warning' />
      </UtilChipsContainer>
    </MyListItem>
  );
};

export default TodoItem;
