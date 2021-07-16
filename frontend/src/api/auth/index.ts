import axios from 'axios';
import { User } from './types';

export const login = async ({ username, password }: User) => {
  const user = {
    username,
    password,
  };
  const { data } = await axios.post('/api/auth', user);
  return data;
};
