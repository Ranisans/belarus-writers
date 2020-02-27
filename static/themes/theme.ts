import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import '@openfonts/pt-sans_cyrillic';

const ptSans = {
  fontFamily: 'PT Sans, serif',
  fontStyle: 'normal',
  fontWeight: '400',
};

// palette created with material palette generator https://material.io/inline-tools/color/
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E8676B',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFFFFF',
      contrastText: '#3d4451',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#3d4451',
    },
    background: {
      default: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'PT Sans',
    fontSize: 16,
    h1: {
      fontSize: '3.5rem',
      lineHeight: '1.2',
      fontWeight: 'bold',
      color: '#3d4451',
      margin: '10px 0 30px',
    },
    h2: {
      fontSize: '2rem',
      lineHeight: '1.2',
      fontWeight: 'bold',
      color: '#3d4451',
      margin: '20px 0 20px',
    },
    h3: {
      fontSize: '1.8rem',
      lineHeight: '1.2',
      fontWeight: 'bold',
      color: '#3d4451',
      margin: '10px 0 20px',
    },
    body1: {
      fontSize: '1.25rem',
      lineHeight: '1.6',
      color: '#000000',
    },
    body2: {
      fontSize: '1rem',
      lineHeight: '1.4',
      color: 'rgb(61, 68, 81)',
    },
    button: {
      fontSize: '1rem',
      lineHeight: '1.4',
      color: 'rgb(61, 68, 81)',
    },
    caption: {
      fontSize: '.8rem',
      lineHeight: '1',
      color: 'rgb(61, 68, 81)',
    },
  },
  spacing: factor => `${0.25 * factor}rem`, // (Bootstrap strategy)
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [ptSans],
      },
    },
    MuiInput: {
      underline: {
        '&&&&:hover:before': {
          borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
        },
      },
    },
  },
});
export default responsiveFontSizes(theme);
