// https://medium.com/javascript-in-plain-english/extend-material-ui-theme-in-typescript-a462e207131f - my instruction
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import "typeface-gfs-didot";

const didot = {
  fontFamily: 'GFS Didot, serif',
  fontStyle: 'normal',
  fontWeight: '400',
};

// palette created with material palette generator https://material.io/inline-tools/color/
let theme = createMuiTheme({
    palette: {
      primary: {
        main: 'rgb(232, 103, 107)',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#9DA5B4',
        contrastText: '#FFFFFF',
      },
      text: {
        primary: '#FFFFFF',
        secondary: '#FFFFFF'
      },
      background: {
        default: '#24292E',
      },
    },  
    typography: {
      fontFamily: 'GFS Didot',
      fontSize: 16,
      h1: {
        fontSize: '2.25rem',
        lineHeight: '1.2',
        fontWeight: 'bold',
        color: '#9DA5B4',
        margin: '10px 0 30px',
      },
      h2: {
        fontSize: '1.875rem',
        lineHeight: '1.2',
        fontWeight: 'bold',
        color: '#9DA5B4',
        margin: '10px 0 20px',
      },
      h3: {
        fontSize: '1.6rem',
        lineHeight: '1.2',
        fontWeight: 'bold',
        color: '#9DA5B4',
        margin: '10px 0 20px',
      },
      body1: {
        fontSize: '1.25rem',
        lineHeight: '1.6',
        color: '#FFFFFF',
        margin: '10px 0 10px',
      },
      body2: {
        fontSize: '1rem',
        lineHeight: '1.4',
        color: 'rgb(214, 216, 218)',
        margin: '10px 0 10px',
      },
      button: {
        fontSize: '1rem',
        lineHeight: '1.4',
        color: 'rgb(255, 255, 255)',
      },
      caption: {
        fontSize: '.8rem',
        lineHeight: '1',
        color: 'rgb(255, 255, 255)',
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
const themeDark = responsiveFontSizes(theme);
export default themeDark;

