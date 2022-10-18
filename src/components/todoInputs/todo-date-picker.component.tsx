import { ChangeEvent, FC } from 'react';
import { TextField } from '@mui/material';

interface InputProps {
  value: string;
  handleDate: (event: ChangeEvent<HTMLInputElement>) => void;
}

const DatePicker: FC<InputProps> = ({ value, handleDate }) => {
  return (
    <TextField
      autoFocus
      margin='dense'
      id='dueDate'
      value={value}
      type='date'
      label='Due Date'
      sx={{ width: '50%', marginBottom: '10px' }}
      variant='standard'
      onChange={handleDate}
      InputLabelProps={{ shrink: true }}
      required
    />
  );
};

export default DatePicker;
