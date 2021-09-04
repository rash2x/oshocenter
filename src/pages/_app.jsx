import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import theme from './theme';
// import GlobalStyle from './GlobalStyle';

const MyApp = ({ Component, pageProps }) => (
  <React.StrictMode>
    <StyledThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        {/* <GlobalStyle /> */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledThemeProvider>
  </React.StrictMode>
);

export default MyApp;
