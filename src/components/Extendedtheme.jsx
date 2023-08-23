// customTheme.js

import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  config: {
    initialColorMode: 'light', // Set the initial color mode to light
  },
});

export default customTheme;
