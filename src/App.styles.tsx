import {
  styled,
  List,
  Typography,
  ListItem,
  ListItemText,
  Chip,
  TextField,
} from '@mui/material/';
import { Container } from '@mui/system';

export const MyContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  marginTop: '20px',
});

export const ControlsContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'space-around',
});

export const UtilChipsContainer = styled(Container)({
  display: 'flex',
});

export const MyList = styled(List)({
  width: '82%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const MyListItem = styled(ListItem)({
  background: '#1976d214',
  marginBottom: '5px',
  display: 'grid',
  gridTemplateColumns: '1fr 1.4fr 130px',
  gridTemplateRows: '80px',
});

export const MyListItemText = styled(ListItemText)({
  marginRight: '20px',
});

export const Paragraph = styled(Typography)({
  alignItems: 'center',
  marginLeft: '50px',
  display: 'flex',
  justifyContent: 'flex-start',
});

export const StatusChip = styled(Chip)({
  variant: 'outlined',
  size: 'small',
  marginLeft: '5px',
  height: '20px',
});

export const UtilsChip = styled(Chip)({
  marginRight: '5px',
});

export const MyTextField = styled(TextField)({
  marginBottom: '10px',
});
