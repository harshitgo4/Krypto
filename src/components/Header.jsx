import { Button, HStack ,Text} from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    
       <HStack p={'4'} bgColor={'blackAlpha.900'} color={'white'}>
    <Button variant={'unstyled'}>
      <Link to={'/'}>Home</Link>
    </Button>
    <Button variant={'unstyled'}>
      <Link to={'/exchange'}>Exchange</Link>
    </Button>
    <Button variant={'unstyled'}>
      <Link to={'/coins'}>Coins</Link>
    </Button>
     
   <HStack position={'absolute'} right={1}>
   <Button variant={'unstyled'}>
      <Link to={'/'}>
        <Text fontFamily={'Tilt Prism'}  letterSpacing={'widest'} fontSize={'2xl'}>
          Krypto
        </Text>
      </Link>
    </Button>
   </HStack>


   </HStack>
  
   </>

  )
}

export default Header;
