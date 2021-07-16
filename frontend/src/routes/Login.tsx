import React from 'react';

import {
  TextField,
  Typography,
  Box,
  Button,
  LinearProgress,
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-location';

import { Container, CenterContainer } from '../components/UI';
import { useMutation } from 'react-query';
import { login } from '../api/auth';
import { User } from '../api/auth/types';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation(login, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err) => console.error(err),
    onSettled: () => {},
  });

  const onSubmit = (values: User) => {
    const user = {
      username: values.username,
      password: values.password,
    };
    if (user) {
      mutate(user);
    }
  };

  if (isLoading)
    return (
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    );

  return (
    <Container>
      <Typography variant="h4">Login</Typography>
      <CenterContainer height="calc(100% - 10px)">
        <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '50%',
            }}
          >
            <TextField
              {...register('username')}
              variant="outlined"
              label="Username"
              style={styles.input}
            />
            <TextField
              {...register('password')}
              variant="outlined"
              label="Password"
              style={styles.input}
            />
            <Box style={styles.buttonWrapper}>
              <Button
                size="large"
                variant="contained"
                onClick={() => navigate('/login')}
                type="submit"
              >
                Login
              </Button>
              <Button
                size="large"
                variant="outlined"
                onClick={() => navigate('/register')}
              >
                Register
              </Button>
            </Box>
          </Box>
        </form>
      </CenterContainer>
    </Container>
  );
};

export default Login;

const styles = {
  form: { width: '100%', display: 'grid', placeItems: 'center' },
  input: { marginBottom: 20 },
  buttonWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
};
