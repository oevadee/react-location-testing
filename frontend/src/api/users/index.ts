import axios, { AxiosResponse } from 'axios';

export const getOne = async (userId: string) => {
  const { data } = await axios.get(`/users/${userId}`);
  return data;
};
