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

import { Container, CenterContainer } from '../../components/UI';
import { useMutation, useQuery } from 'react-query';
import { User } from '../../api/auth/types';
import { useApp as useAppContext } from '../../context/appContext';
import { ResponseData } from './types';
import { login, autoLogin } from '../../api/auth/index';

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const { setUser } = useAppContext();

  useQuery('autoLogin', () => autoLogin, {
    onSuccess: (data) => {
      if (data) {
        setUser(data);
      }
    },
  });
  const { mutate, isLoading } = useMutation(login, {
    onSuccess: async (data: ResponseData) => {
      if (data) {
        const { token, userId } = data;
        await localStorage.setItem('token', token);
        setUser(userId);
      }
    },
    onError: (err) => console.error(err),
    onSettled: () => {},
  });

  const onSubmit = (values: User) => {
    try {
      const data = {
        username: values.username,
        password: values.password,
      };
      if (data) {
        mutate(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      reset();
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
              <Button size="large" variant="contained" type="submit">
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
