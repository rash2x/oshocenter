import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import theme from './theme';

function MyApp({ Component, pageProps }) {
  return <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />;
    </ThemeProvider>
  </>;
}

export default MyApp;
