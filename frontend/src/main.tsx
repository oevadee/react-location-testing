import React from 'react';
import { render } from 'react-dom';

import './index.scss';

import { ReactLocation } from 'react-location';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

import App from './App';
import { theme } from './theme';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactLocation>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </ReactLocation>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
