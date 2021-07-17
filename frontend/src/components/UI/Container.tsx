import React from 'react';
import { Box } from '@material-ui/core';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <Box width="100%" height="100%" padding={4}>
      {children}
    </Box>
  );
};

export default Container;
