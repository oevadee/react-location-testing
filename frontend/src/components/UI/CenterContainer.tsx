import React from 'react';
import { Box } from '@material-ui/core';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  height?: string | number | undefined;
}

const CenterContainer = ({ children, height = '100%' }: Props) => {
  return (
    <Box
      width="100%"
      height={height}
      padding={8}
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      {children}
    </Box>
  );
};

export default CenterContainer;
