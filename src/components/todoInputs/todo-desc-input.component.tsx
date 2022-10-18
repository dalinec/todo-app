import { ChangeEvent, FC } from 'react';
import TextField from '@mui/material/TextField';

interface InputProps {
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const DescriptionInput: FC<InputProps> = ({ value, handleChange }) => {
  return (
    <TextField
      autoFocus
      margin='dense'
      id='name'
      label='Description'
      value={value}
      fullWidth
      variant='standard'
      required
      sx={{ marginBottom: '15px' }}
      onChange={handleChange}
    />
  );
};

export default DescriptionInput;
