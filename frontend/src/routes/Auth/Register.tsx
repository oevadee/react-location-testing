import { TextField, Typography, Box, Button } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, CenterContainer } from '../../components/UI';
import { useNavigate } from 'react-location';
import { CreateUser, ResponseData } from './types';
import { useApp as useAppContext } from '../../context/appContext';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { register as registerUser } from '../../api/auth';
import { getAll } from '../../api/users';

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const { setUser } = useAppContext();
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(registerUser, {
    onSuccess: (data: ResponseData) => {
      console.log(data);
      if (data.id) {
        setUser(data);
      }
    },
    onError: (err) => console.error(err),
    onSettled: () => {
      queryClient.invalidateQueries('users');
    },
  });

  const onSubmit = (values: CreateUser) => {
    if (values.password === values.confirmPassword) {
      const user = {
        username: values.username,
        password: values.password,
      };
      if (user) {
        mutate(user);
      }
    }
    reset();
  };

  return (
    <Container>
      <Typography variant="h4">Register</Typography>
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
            <TextField
              {...register('confirmPassword')}
              variant="outlined"
              label="Confirm Password"
              style={styles.input}
            />
            <Box style={styles.buttonWrapper}>
              <Button size="large" variant="contained" type="submit">
                Register
              </Button>
              <Button
                size="large"
                variant="outlined"
                onClick={() => navigate('/login')}
              >
                Login
              </Button>
            </Box>
          </Box>
        </form>
      </CenterContainer>
    </Container>
  );
};

export default Register;

const styles = {
  form: { width: '100%', display: 'grid', placeItems: 'center' },
  input: { marginBottom: 20 },
  buttonWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
};
