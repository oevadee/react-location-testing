import axios from 'axios';
import { User, CreateUser } from './types';

export const login = async ({ username, password }: User) => {
  const user = {
    username,
    password,
  };
  const { data } = await axios.post('/api/auth', user);
  return data;
};

export const register = async ({
  username,
  password,
  confirmPassword,
}: CreateUser) => {
  const user = {
    username,
    password,
  };
  const { data } = await axios.post('/api/auth', user);
  return data;
};
