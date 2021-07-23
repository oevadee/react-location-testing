import React, { useState } from 'react';

import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';

import images from '../../../../assets';
import { useApp as useAppContext } from '../../../../context/appContext';
import { generateRandomLyric } from '../../../../utils';
import { getRandom } from '../../../../api/lyrics';

import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  TextField,
  Typography,
  Skeleton,
  CircularProgress,
  LinearProgress,
} from '@material-ui/core';
import { useAlert } from '../../../../hooks';
import { green } from '@material-ui/core/colors';
import { theme } from '../../../../theme';

const GuessingCard = () => {
  const { lyric, setLyric } = useAppContext();
  const { alert, dispatchAlert } = useAlert();
  const { register, handleSubmit, reset } = useForm();
  const { mutate, isLoading } = useMutation(getRandom, {
    onSuccess: (data) => {
      console.log(data);
      if (data && lyric) {
        const { quote, song, album } = data;

        setLyric({
          ...lyric,
          quote,
          song,
          album,
        });
      }
    },
  });

  interface SubmitProps {
    answear: string;
    finalAnswear: string;
  }

  const onSubmit = ({ answear, finalAnswear }: SubmitProps) => {
    if (
      lyric &&
      !lyric.quote &&
      answear.toLowerCase() === lyric.name.split('_').join(' ').toLowerCase()
    ) {
      mutate({
        name: lyric.name.split('_').join(' ').toLowerCase(),
      });
    } else if (
      lyric &&
      lyric.quote &&
      finalAnswear.toLowerCase() ===
        lyric.song.split('_').join(' ').toLowerCase()
    ) {
      dispatchAlert();
    } else {
      reset();
      setLyric(null);
      generateRandomLyric({ images, actionSetter: setLyric });
    }
    return;
  };

  if (isLoading)
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>;

  return (
    lyric && (
      <Stack>
        {alert && (
          <Alert variant="outlined" severity="success">
            Congratulations 🥳
          </Alert>
        )}
        <Card
          sx={{ maxWidth: 345, width: '100%', height: '8o%', marginTop: 4 }}
        >
          <CardMedia
            sx={{ height: 140, width: '100%' }}
            image={lyric.imagePath}
            title={lyric.name}
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {!lyric.quote ? 'Which album is that?' : 'Now guess the song'}
              </Typography>
              {lyric.quote && (
                <Divider
                  sx={{
                    mb: 1,
                  }}
                />
              )}
              {!lyric.quote ? (
                <TextField
                  {...register('answear')}
                  fullWidth
                  size="small"
                  placeholder="Enter album name..."
                />
              ) : (
                <Box>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    sx={{
                      mb: 1,
                    }}
                  >
                    {lyric.quote}
                  </Typography>
                  <TextField
                    {...register('finalAnswear')}
                    fullWidth
                    size="small"
                    placeholder="Enter song name..."
                  />
                </Box>
              )}
            </CardContent>
            <CardActions
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: 2,
                paddingTop: 0,
              }}
            >
              <Button size="small" type="submit" variant="contained">
                Submit
              </Button>
              <Button size="small" onClick={() => setLyric(null)}>
                Cancel
              </Button>
            </CardActions>
          </form>
        </Card>
      </Stack>
    )
  );
};

export default GuessingCard;
