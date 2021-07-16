import axios from 'axios';

export const getOne = async (userId: string) => {
  const { data } = await axios.get(`/api/users/${userId}`);
  return data;
};

export const getAll = async () => {
  const { data } = await axios.get(`/api/users`);
  return data;
};
