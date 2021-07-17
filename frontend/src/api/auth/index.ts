import axios from 'axios';
import { User, CreateUser } from './types';

export const login = async ({ username, password }: User) => {
  const user = {
    username,
    password,
  };
  const { data } = await axios.post('/api/auth/login', user);
  return data;
};

export const register = async ({ username, password }: CreateUser) => {
  const user = {
    username,
    password,
  };
  const { data } = await axios.post('/api/auth/register', user);
  return data;
};
