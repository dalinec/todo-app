import { ChangeEvent, FC } from 'react';
import { Checkbox, FormGroup } from '@mui/material';
import { StatusContainer, Label } from './status-picker.styles';

interface InputProps {
  value: boolean;
  handleStatus: (event: ChangeEvent<HTMLInputElement>) => void;
}

const StatusPicker: FC<InputProps> = ({ value, handleStatus }) => {
  return (
    <StatusContainer>
      <Label>Completed?</Label>
      <FormGroup>
        <Checkbox
          value={value}
          onChange={handleStatus}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </FormGroup>
    </StatusContainer>
  );
};

export default StatusPicker;
