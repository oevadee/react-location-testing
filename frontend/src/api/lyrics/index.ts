import axios, { AxiosResponse } from 'axios';

export interface RandomLyric {
  quote: string;
  song: string;
  album: string;
}

export const getRandom = async ({ name }: { name: string }) => {
  const { data } = await axios.get<RandomLyric>(
    `https://taylorswiftapi.herokuapp.com/get?album=${name}`,
  );
  return data;
};
