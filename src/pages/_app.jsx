import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { AnimatePresence } from 'framer-motion';
import theme from './theme';

const MyApp = ({ Component, pageProps }) => (
  <React.StrictMode>
    <StyledThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </ThemeProvider>
    </StyledThemeProvider>
  </React.StrictMode>
);

export default MyApp;
