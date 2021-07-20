import React, { useState } from 'react';

import { useMutation, useQuery } from 'react-query';
import { useForm } from 'react-hook-form';

import images from '../../assets';
import { useApp as useAppContext } from '../../context/appContext';
import { getRandom, RandomLyric } from '../../api/lyrics';

import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  TextField,
  Typography,
} from '@material-ui/core';
import { CenterContainer } from '../../components/UI';
import { generateRandomLyric } from '../../utils';
import { useNavigate } from 'react-location';

const Guessing = () => {
  const { lyric, setLyric } = useAppContext();
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const { mutate, isLoading } = useMutation(getRandom, {
    onSuccess: (data) => {
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

  const onSubmit = ({
    answear,
    finalAnswear,
  }: {
    answear: string;
    finalAnswear: string;
  }) => {
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
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
        navigate('success');
      }, 3000);
    } else {
      setLyric(null);
      generateRandomLyric({ images, actionSetter: setLyric });
      reset();
    }
    return;
  };

  return (
    <CenterContainer>
      {alert && (
        <Alert severity="success">
          Congratulations! You guessed the song right 🥳
        </Alert>
      )}
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
        <Card sx={{ maxWidth: 345, width: '100%' }}>
          <CardMedia
            sx={{ height: 140 }}
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
      )}
      {/* <DataDisplay /> */}
    </CenterContainer>
  );
};

export default Guessing;
