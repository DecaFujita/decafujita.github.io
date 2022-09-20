import { green, yellow } from '@mui/material/colors';

const getDesignTokens = (mode) =>({
  palette: {
    mode,
    primary: {
      light: yellow[600],
      main: yellow[700],
      dark: yellow[800],
      // ...(mode === 'dark' && {
      //   light: amber[200],
      //   main: amber[300],
      //   dark: amber[400],
      // }),
    },
    secondary: {
      light: '#474747',
      main: '#272727',
      dark: '#191919'
    },
    grey: {
      six: '#F2F2F@',
      five: '#E0E0E0',
      four: '#BDBDBD',
      three:'#828282',
      two: '#4F4F4F',
      one:'#333333'
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
      ...(mode === 'dark' && {
        default: '#303030',
        paper: '#424242',
      }),
    },
    // text: {
    //   primary: 'rgba(0,0,0,0.87)',
    //   secondary: 'rgba(0,0,0,0.54)',
    //   disabled: 'rgba(0,0,0,0.38)',
    //   hint: 'rgba(0,0,0,0.38)',
    //   ...(mode === 'dark' && {
    //     primary: '#ffffff',
    //     secondary: 'rgba(0,0,0,0.53)',
    //     disabled: 'rgba(0,0,0,0.37)',
    //     hint: 'rgba(0,0,0,0.37)',
    //   })
    // },
  },
  breakpoints: {
    values: {
      xmobile: 415, // should consider 320 (iPhone 5)
      mobile: 500,
      tablet: 700,
      laptop: 1000,
      desktop: 1200,
    },
  },
  typography: {
    // fontFamily: 'Raleway',
    fontFamily: [
      'Raleway',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: { fontSize: '9.6rem', fontWeight:'700' }, //96
    h2: { fontSize: '6rem', fontWeight:'400' }, //60
    h3: { fontSize: '4.8rem', fontWeight: '300' }, //48
    h4: { fontSize: '3.2rem',  fontWeight: '600' }, //32
    h5: { fontSize: '2.4rem', fontWeight:'400' }, //24
    h6: { fontSize: '1.9rem', fontWeight:'400' }, //19
    body1: { fontSize: '1.6rem', fontWeight:'400' }, //16
    body2: { fontSize: '1.4rem', fontWeight:'400' }, //14
  },
});

export default getDesignTokens; 