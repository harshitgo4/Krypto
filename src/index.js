import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from './components/Extendedtheme'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme} >
    <App />
    </ChakraProvider>
  </React.StrictMode>
);
export const server=`https://api.coingecko.com/api/v3`;
