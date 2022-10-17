import { styled, Typography } from '@mui/material';
import { Container } from '@mui/system';

export const StatusContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginLeft: '-20px',
});

export const Label = styled(Typography)({
  textAlign: 'center',
});
