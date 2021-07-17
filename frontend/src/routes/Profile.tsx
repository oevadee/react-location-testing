import React from 'react';
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  createStyles,
  Grid,
  Paper,
} from '@material-ui/core';
import Container from '../components/UI/Container';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@emotion/react';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: 24,
  },
}));

const Profile = () => {
  const styles = useStyles();
  return (
    <Container>
      <Box className={styles.root}>
        <Card>
          <CardHeader />
          <Avatar src="https://avatars.githubusercontent.com/u/62460030?v=4" />
        </Card>
        <Card>
          <Avatar src="https://avatars.githubusercontent.com/u/62460030?v=4" />
        </Card>
      </Box>
    </Container>
  );
};

export default Profile;
