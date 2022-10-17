import { ChangeEvent, FC } from 'react';
import TextField from '@mui/material/TextField';

interface InputProps {
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ value, handleChange }) => {
  return (
    <TextField
      autoFocus
      margin='dense'
      id='name'
      label='Title'
      value={value}
      fullWidth
      variant='standard'
      required
      onChange={handleChange}
    />
  );
};

export default Input;
