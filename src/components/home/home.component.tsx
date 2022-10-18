import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { MyTextField } from '../../App.styles';
import { MyContainer } from './home.styles';
import { Button } from '@mui/material';

const Home = () => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/todos');
    console.log(userName);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.currentTarget.value;
    setUserName(name);
  };

  return (
    <>
      <MyContainer>
        <form onSubmit={handleSubmit}>
          <MyTextField
            value={userName}
            id='outlined-basic'
            size='small'
            onChange={handleChange}
            label='Enter your name'
            variant='outlined'
            margin='normal'
          />
          <Button
            type='submit'
            variant='contained'
            sx={{ marginLeft: '10px', marginTop: '17px' }}
          >
            Submit
          </Button>
        </form>
      </MyContainer>
    </>
  );
};

export default Home;
