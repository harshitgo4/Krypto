import { Avatar, Box, Button, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react'

const Footer = () => {
  return (
    <>
    <Box h={'auto'} maxW={'full'} bgColor={'blackAlpha.900'} 
    color={'white.400'} >
    <Stack direction={['column','row']}> 
    <HStack w={'100%'} justifyContent={['center','flex-start']}>
      <Text>
        All Rights are reserved
      </Text>
    </HStack>
    <HStack w={'80%'} p={'4' } justifyContent={'flex-end'}>
    <Text> Contact us On </Text>
      <Button variant={'link'} colorScheme='pink'>
        Instagram
      </Button>
      <Button variant={'link'} colorScheme='blue'>
        Twitter
      </Button>
      <Button variant={'link'} colorScheme='blue' >
        Facebook
      </Button>
      
      </HStack>
    </Stack>
    </Box>
    
    </>
  )
}

export default Footer;
