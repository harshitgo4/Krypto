import { Alert, AlertIcon } from '@chakra-ui/react';
import React from 'react';

const Errorcomponent = ({ message }) => {
  return (
    <Alert
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      bgColor="red.900"
      zIndex="9999"
      p="2"
      borderRadius="0"
      w={'fit-content'}
    >
      <AlertIcon />
      {message}
    </Alert>
  );
};

export default Errorcomponent;
