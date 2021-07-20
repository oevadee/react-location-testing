import { Dispatch, SetStateAction } from 'react';
import { useApp as useAppContext, Lyric } from '../context/appContext';

interface Images {
  1989: string;
  evermore: string;
  fearless: string;
  folklore: string;
  lover: string;
  red: string;
  reputation: string;
  speak_now: string;
  taylor_swift: string;
}

interface GenerateRandomLyric {
  images: Images;
  actionSetter: Dispatch<SetStateAction<Lyric | null>>;
}

export const generateRandomLyric = ({
  images,
  actionSetter,
}: GenerateRandomLyric) => {
  const randomIndex = Math.floor(Math.random() * 9);
  const [name, imageValue] = Object.entries(images)[randomIndex];
  const imagePath = `/src/assets/${imageValue}`;

  actionSetter({
    imagePath,
    name,
  });
};
