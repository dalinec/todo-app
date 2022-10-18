import { ChangeEvent, useState } from 'react';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { TextField } from '@mui/material';

interface InputProps {
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TimeInput = (props: InputProps) => {
  const [value, setValue] = useState<Dayjs | null>(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label='Due Time'
        value={value}
        onChange={(handleChange) => {
          setValue(handleChange);
        }}
        renderInput={(params) => (
          <TextField {...params} value={value} onChange={props.handleChange} />
        )}
      />
    </LocalizationProvider>
  );
};

export default TimeInput;
