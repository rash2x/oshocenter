import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7C4DFF',
      extra: '#B388FF',
    },
    type: 'light',
    background: {
      default: '#FEF9FF',
      main: '#ECE9DE',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
  },
  overrides: {
    MuiButton: {
      root: {
        fontWeight: 600,
        fontStyle: 'italic',
        textTransform: 'none'
      },
      sizeLarge: {
        borderRadius: '30px',
        fontSize: '18px'
      }
    },
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
