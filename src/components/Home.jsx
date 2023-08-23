import { Box, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import img1 from "../images/1.jpg"

const Home = () => {
  return (
    <>
      <Box
        w="100vw"     
        h="80vh"      
        p={0}       
        position="relative"  
      >
        <Image
          w="100%"  
          h="100%"   
          objectFit={'cover'}  
          src={img1}
        />
        <VStack  position="absolute"   bottom={['300','1']}   
          right={['10','400']}     >
        <Text
          color={'white'}  
          fontSize="8xl"  
          borderBottom={'4px solid azure'}
          fontFamily={'Tilt Prism'}
          letterSpacing={'widest'}
        >
          Krypto
        </Text>
        <Text color={'white'}>
          One Stop for All the Cryptocurrencies
        </Text>
        </VStack>
      </Box>
    </>
  )
}

export default Home
