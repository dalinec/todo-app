import { ChangeEvent, useState } from 'react';
import { useAppDispatch } from '../features/store/store';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../utils/validation';

import Input from './todo-inputs/todo-title-input.component';
import DescriptionInput from './todo-inputs/todo-desc-input.component';
import TimeInput from './todo-inputs/todo-time-input.component';
import DatePicker from './todo-inputs/todo-date-picker.component';
import StatusPicker from './todo-inputs/status-picker/todo-status-picker.component';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { addTodo } from '../features/slices/todoSlice';

const TodoForm = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmitHandler = (data: FormValues) => {
    console.log({ data });
    reset();
  };

  interface FormValues {
    title: string;
    description: string;
  }

  const initialState = {
    id: '',
    title: '',
    dueDate: '',
    time: '',
    description: '',
    completed: false,
  };
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState(initialState);
  const { title, dueDate, completed, description, time } = formData;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const resetForm = () => {
    setFormData(initialState);
  };

  const handleStatus = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.checked === true) {
      setFormData({ ...formData, completed: true });
    } else {
      setFormData({ ...formData, completed: false });
    }
  };

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, dueDate: event.currentTarget.value });
  };
  const handleDescChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, description: event.currentTarget.value });
  };
  const handleTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, time: event.currentTarget.value });
  };
  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, title: event.currentTarget.value });
  };

  //not working
  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.currentTarget;

  //   setFormData({ ...formData, [name]: value });
  // };

  const handleFormSubmit = () => {
    dispatch(addTodo(formData));
    resetForm();
    handleClose();
  };

  return (
    <div>
      <Button variant='outlined' onClick={handleClickOpen}>
        Add todo
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Todo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a new todo, please fill the form
          </DialogContentText>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <Input
              {...register('title')}
              value={title}
              handleChange={handleTitleChange}
            />
            <DescriptionInput
              {...register('description')}
              value={description}
              handleChange={handleDescChange}
            />
            <DatePicker value={dueDate} handleDate={handleDateChange} />
            <TimeInput value={time} handleChange={handleTimeChange} />
            <StatusPicker value={completed} handleStatus={handleStatus} />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleFormSubmit}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TodoForm;
