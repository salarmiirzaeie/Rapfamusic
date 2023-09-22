import {extendTheme} from 'native-base';

export const theme = extendTheme({
  colors: {
    primary: {
      100: '#4637F5',
      200: '#1F159A',
      300: '#11093B',
    },
    light: {
      100: '#F2F4FC',
      200: '#A29DCB',
    },
    info: {
      100: '#99628A',
    },
  },

  config: {
    initialColorMode: 'dark',
  },
});
