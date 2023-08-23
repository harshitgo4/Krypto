import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Container, HStack, RadioGroup,Radio } from '@chakra-ui/react';
import { server } from '..';
import Loader from './Loader';
import Errorcomponent from './Errorcomponent';
import Coincard from './Coincard';

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState('inr');
  const currencySymbol = currency === 'inr' ? '₹' : currency === 'eur' ? '€' : '$';
 

  const pageSwitch = (page) => {
    setPage(page);
    setLoad(true);
  };

  const btns = new Array(130).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        setCoins(data);
        setLoad(false);
       
       
      } catch (error) {
        setLoad(true);
        setError(true);
      }
    };
    fetchCoins();
  }, [page, currency]);

  if (error) {
    return <Errorcomponent message={'Error While fetching Coins'} />;
  }

  return (
    load ? (
      <Loader />
    ) : (
      <>
       <RadioGroup value={currency} onChange={(value) => setCurrency(value)}>
  <HStack spacing={'4'}>
    <Radio value={"inr"}>INR</Radio>
    <Radio value={"eur"}>EURO</Radio>
    <Radio value={"usd"}>USD</Radio>
  </HStack>
</RadioGroup>

        <Container maxW={'container.lg'} p={4} bgColor={'white'}>
          <HStack justifyContent={'center'} alignItems={'center'} wrap={'wrap'}>
            {coins.map((i) => (
              <Coincard
                currencySymbol={currencySymbol}
                name={i.name}
                img={i.image}
                symbol={i.symbol}
                id={i.id}
                price={i.current_price}
                key={i.id}
              />
            ))}
          </HStack>
        </Container>
        <HStack overflowX={'scroll'}>
          {btns.map((item, index) => (
            <Button
              key={index}
              bgColor={'blackAlpha.900'}
              color={'white'}
              onClick={() => pageSwitch(index + 1)}
            >
              {index + 1}
            </Button>
          ))}
        </HStack>
      </>
    )
  );
};

export default Coins;
