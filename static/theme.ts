// https://medium.com/javascript-in-plain-english/extend-material-ui-theme-in-typescript-a462e207131f - my instruction
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import font from "typeface-gfs-didot";
console.log(font);

const didot = {
  fontFamily: 'GFS Didot, serif',
  fontStyle: 'normal',
  fontWeight: '400',
};

// palette created with material palette generator https://material.io/inline-tools/color/
let theme = createMuiTheme({
    palette: {
      primary: {
        light: '#E96F72',
        main: '#E8676B',
        dark: '#E96F72',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#373B42',
        contrastText: '#FFFFFF',
      },
      text: {
        primary: '#FFFFFF',
        secondary: '#3d4451'
      },
      background: {
        default: '#FFFFFF',
      },
    },  
    typography: {
      fontFamily: 'GFS Didot',
      fontSize: 16,
      h1: {
        fontSize: '2.25rem',
        lineHeight: '1.2',
        fontWeight: 'bold',
        color: '#3d4451',
        margin: '10px 0 30px',
      },
      h2: {
        fontSize: '1.875rem',
        lineHeight: '1.2',
        fontWeight: 'bold',
        color: '#3d4451',
        margin: '10px 0 20px',
      },
      h3: {
        fontSize: '1.6rem',
        lineHeight: '1.2',
        fontWeight: 'bold',
        color: '#3d4451',
        margin: '10px 0 20px',
      },
      body1: {
        fontSize: '1.25rem',
        lineHeight: '1.6',
        color: '#000000',
        margin: '10px 0 10px',
      },
      body2: {
        fontSize: '1rem',
        lineHeight: '1.4',
        color: 'rgb(61, 68, 81)',
        margin: '10px 0 10px',
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
      }
    },
    spacing: factor => `${0.25 * factor}rem`, // (Bootstrap strategy)
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [didot],
        },
      },
    },
  });
theme = responsiveFontSizes(theme);
export default theme;

