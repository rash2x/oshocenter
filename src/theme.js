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
      paper: '#FCF2FD',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    fontSize: 16,

    body1: {
      fontSize: 16,
      fontWeight: 600,
    }
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
    MuiMenuItem: {
      root: {
        '& a': {
          textDecoration: 'none',
          fontSize: 14,
          color: 'rgba(0, 0, 0, 0.87)',

          '&:hover': {
            color: '#7C4DFF'
          }
        },
      },
    },
  },
});

export default theme;
