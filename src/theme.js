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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
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
        fontSize: '18px',

        '@media (max-width: 960px)': {
          fontSize: '16px',
          padding: '8px 20px'
        }
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
