import React from 'react';

import { useNavigate } from 'react-location';

import { useApp as useAppContext } from '../../context/appContext';

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  LinearProgress,
  TextField,
  Typography,
} from '@material-ui/core';
import { CenterContainer } from '../../components/UI';

const Success = () => {
  const { lyric, setLyric } = useAppContext();
  const navigate = useNavigate();

  const handleQuizEnding = () => {
    navigate('my-lyrics');
  };

  if (!lyric)
    return (
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    );

  return (
    <CenterContainer>
      <Typography variant="h2">Success</Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 4,
        }}
      >
        You earn 20 points
      </Typography>
      <Card sx={{ maxWidth: 345, width: '100%' }}>
        <CardMedia
          sx={{ height: 140 }}
          image={lyric.imagePath}
          title={lyric.name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            sx={{
              mb: 1,
            }}
          >
            {lyric.album}
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            sx={{
              mb: 1,
            }}
          >
            {lyric.quote}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: 2,
            paddingTop: 0,
          }}
        >
          <Button size="small" variant="contained" onClick={handleQuizEnding}>
            Continue
          </Button>
        </CardActions>
      </Card>
    </CenterContainer>
  );
};

export default Success;
