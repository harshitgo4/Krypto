import React from 'react'
import { Heading, Image, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const Coincard = ({id, name, img, symbol,price,currencySymbol="₹", url }) => {
  return (
    <Link to={`/coin/${id}`} target={'_self'} rel="noopener noreferrer">
    <VStack
      justifyContent={'center'}
      bgColor={'gray.400'}
      w={'52'}
      color={'black'}
      margin={'2'}
      borderRadius={'4'}
      boxShadow={'xl'}
      transition={'transform 0.3s'}
      _hover={{ transform: 'scale(1.1)' }} // Apply the scaling transformation on hover
    >
      <Image src={img} w={'10'} h={'10'} objectFit={'contain'} alt={'exchange'} my={'2'} />
      <Heading size={'md'} noOfLines={'1'}>
        {symbol}
      </Heading>
      <Text letterSpacing={'1'}>{name}</Text>
      <Text letterSpacing={'1'}  >{price?`${currencySymbol}${price}`:"NA"}</Text>
    </VStack>
  </Link>
  )
}

export default Coincard;
