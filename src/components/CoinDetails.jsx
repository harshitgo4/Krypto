import { Container, Box, RadioGroup, HStack, Radio, VStack, Text, Image, Stat, StatNumber, StatLabel, StatHelpText, StatArrow, Badge, Progress, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import axios from 'axios';
import { server } from '..';
import { useParams } from 'react-router-dom';
import Errorcomponent from './Errorcomponent';
import MChart from "./MyChart"

const Coindetails = () => {
  const [coin, setCoin] = useState([]);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(false);
  const [days, setDays] = useState('24h'); 
  const [chartarray, setChartarray] = useState([]);
  const [currency, setCurrency] = useState('inr');
  const currencySymbol = currency === 'inr' ? '₹' : currency === 'eur' ? '€' : '$';
  const params = useParams();
  const btns = ['24h', '7d', '14d', '30d'];

  const switchchart = (selectedDays) => {
    setLoad(true);
    setDays(selectedDays); 
  }

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        const { data: chartdata } = await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`);
        setCoin(data);
        setLoad(false);
        setChartarray(chartdata.prices);
        console.log(data);
      } catch (error) {
        setLoad(true);
        setError(true);
      }
    };
    fetchCoin();
  }, [params.id, currency, days,setDays]);

  if (error) {
    return <Errorcomponent message={'Error While fetching Coin data'} />;
  }

  return (
    <Container maxW={'container.lg'}>
      {
        load ? <Loader /> : (
          <>
            <Box alignContent={'center'} w={'full'} my={['10','2']} justifyContent={'center'} borderWidth={'1'} objectFit={'contain'}>
              <MChart currency={currencySymbol} arr={chartarray} days={days} />
            </Box>
            <HStack justifyContent={'center'} p={'4'}>
              {btns.map((i) => (  
                <Button variant={'outline'} color={'red.300'} key={i} onClick={() => switchchart(i)}>{i}</Button>
              ))}
            </HStack>
            <RadioGroup value={currency} onChange={(value) => setCurrency(value)}>
              <HStack spacing={'4'}>
                <Radio value={"inr"}>INR</Radio>
                <Radio value={"eur"}>EURO</Radio>
                <Radio value={"usd"}>USD</Radio>
              </HStack>
            </RadioGroup>
            <VStack spacing={'4'}   p={'16'} alignItems={'flex-start'}>
        <Text fontSize={'small'} alignSelf={'center'}  opacity={'0.7'}> 
        last updated on {' '} {
          Date(coin.market_data.last_updated).split('G')[0]
        }
        </Text>
        <Image my={'2'} src={coin.image.large} w={'20'} h={'20'} objectFit={'contain'}/>

        <Stat>
          <StatNumber> {currencySymbol} {coin.market_data.current_price[currency]}</StatNumber>
          <StatLabel fontSize={'3xl'}>{coin.name}</StatLabel>
          <StatHelpText>
            <StatArrow type={coin.market_data.market_cap_change_percentage_24h>0 ?'increase':'decrease'} />
            {coin.market_data.market_cap_change_percentage_24h}%
          </StatHelpText>
        </Stat>
        <Badge fontSize={'2xl'} 
          bgColor={'orange'}
          color={'white'}
        >
          #{coin.market_cap_rank}
        </Badge>
        <Custombar high={`${currencySymbol} ${coin.market_data.high_24h[currency]}`} low={`${currencySymbol} ${coin.market_data.low_24h[currency]}`}/>

        <Box p={'4'} w={'full'} >
        <Item name={'Market Cap'} value={`${currencySymbol}${coin.market_data.market_cap[currency]}`} />
        <Item name={'Max Supply'} value={coin.market_data.max_supply} />
        <Item name={'Circulated'} value={coin.market_data.circulating_supply} />
        </Box>


        </VStack>
        </>
      )
    }
   </Container>
  )
}
const Item=({value,name})=>(

  <HStack  overflowX={'hidden'}  bgColor={'blue.200'} minW={'-webkit-min-content'} w={'100%'} my={'4'}fontSize={['4sm','2xl']} justifyContent={'space-between'} letterSpacing={'widest'} fontFamily={'monospace'} color={'blackAlpha.700'}>
    <Text>{name}</Text>
    <Text>{value===null?"NOT AVAILABLE":value}</Text>
  </HStack>
)
const Custombar=({high,low})=>(
  <VStack w={'full'}>
  <Progress value='60' colorScheme='teal' w='full'/> 
  <HStack justifyContent={'space-between'} w={'full'}>
    <Badge children={low} fontSize={['2sm','2xl']} colorScheme='red'/>
    <Text>24H Range</Text>
    <Badge children={high} fontSize={['2sm','2xl']} colorScheme='green'/>
  </HStack>

  </VStack>
)
export default Coindetails