import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7C4DFF',
      extra: '#B388FF',
    },
    type: 'dark',
    background: {
      default: '#0F0529',
      main: '#290524',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
  },
  overrides: {
    MuiMenu: {
      paper: {
        background: '#7C4DFF',
      },
    },
    MuiMenuItem: {
      root: {
        color: '#0F0529',
        '& a': {
          color: '#fff',
          textDecoration: 'none',
        },
      },
    },
  },
});

export default theme;
