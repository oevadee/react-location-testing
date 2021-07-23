import React from 'react';

import images from '../../../assets';
import { useApp as useAppContext } from '../../../context/appContext';
import { generateRandomLyric } from '../../../utils';

import { Box, Button } from '@material-ui/core';
import { CenterContainer } from '../../../components/UI';
import GuessingCard from './components/GuessingCard';

const Guessing = () => {
  const { lyric, setLyric } = useAppContext();

  return (
    <CenterContainer>
      {!lyric ? (
        <Button
          variant="contained"
          onClick={() =>
            generateRandomLyric({ images, actionSetter: setLyric })
          }
          disabled={lyric ? true : false}
        >
          Start guessing
        </Button>
      ) : (
        <Box height="100%" display="flex">
          <GuessingCard />
        </Box>
      )}
    </CenterContainer>
  );
};

export default Guessing;
