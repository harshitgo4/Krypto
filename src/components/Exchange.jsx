import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react';
import { server } from '..';
import Loader from './Loader';
import Errorcomponent from './Errorcomponent';

const Exchange = () => {
  const [exchange, setExchange] = useState([]);
  const [load, setLoad] = useState(true);
  const [error,seterror]=useState(false);

  useEffect(() => {
    const fetchData = async () => {
     try {
      const { data } = await axios.get(`${server}/exchanges`);
      setExchange(data);
      setLoad(false);
     } catch (error) {
        setLoad(true);
        seterror(true);
     }
    };
    fetchData();
  }, []);
  if(error)
  {
    return(
      <Errorcomponent message={"Error While fetching Data"}/>
    )
  }
  return (
    load ? (
      <Loader/>
      ) : (
    <Container maxW={'container.lg'} p={4} bgColor={'white'}>
      <HStack justifyContent={'center'} alignItems={'center'} wrap={'wrap'}>
       { (
          exchange.map((i) => (
            <Exchangecard name={i.name} img={i.image} rank={i.trust_score_rank} url={i.url} key={i.id} />
          ))
        )}
      </HStack>
    </Container>
  ) )};



const Exchangecard = ({ name, img, rank, url }) => (
  <a href={url} target={'_blank'} rel="noopener noreferrer">
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
        {rank}
      </Heading>
      <Text letterSpacing={'1'}>{name}</Text>
    </VStack>
  </a>
);

export default Exchange;
