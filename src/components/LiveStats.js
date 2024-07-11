import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, SimpleGrid, Text, VStack, HStack } from '@chakra-ui/react';

const LiveStats = ({ account }) => {
  const [stats, setStats] = useState({
    balance: 0,
    price: '$0.00',
    change: '0.00%',
    marketCap: '$0.00B',
    volume: '$0.00B',
    supply: '0',
    high: '$0.00',
    low: '$0.00',
  });

  

  useEffect(() => {
    const fetchStats = async () => {
      const apiKey = process.env.REACT_APP_CRYPTOCOMPARE_API_KEY;
      const apiKey2 = process.env.REACT_APP_BALANCE_API_KEY;
      const ethPriceResponse = await axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD&api_key=${apiKey}`);
      const ethPriceData = ethPriceResponse.data.DISPLAY.ETH.USD;

      const balanceResponse = await axios.get(`https://api.etherscan.io/api?module=account&action=balance&address=${account}&tag=latest&apikey=${apiKey2}`);
      const balance = balanceResponse.data.result / 1e18;

      setStats({
        balance: balance.toFixed(4),
        price: ethPriceData.PRICE,
        change: ethPriceData.CHANGEPCT24HOUR + '%',
        marketCap: ethPriceData.MKTCAP,
        volume: ethPriceData.TOTALVOLUME24H,
        supply: ethPriceData.SUPPLY,
        high: ethPriceData.HIGHDAY,
        low: ethPriceData.LOWDAY,
      });
    };

    fetchStats();
  }, [account]);

  return (
    <Box bg="white" p={6} borderRadius="lg" boxShadow="xl" width="100%" mt={8}>
      <VStack spacing={4} align="start">
        <Text fontSize="4xl" fontWeight="bold" color="gray.800">ETH Balance</Text>
        <Text fontSize="2xl" fontWeight="bold" color="gray.900">{stats.balance} ETH</Text>
        {/* <Text fontSize="xl" fontWeight="bold" color="gray.900">{stats.price}</Text> */}
      </VStack>
      <SimpleGrid columns={2} spacing={8} mt={8}>
        <Box>
          <Text color="gray.600">Price</Text>
          <Text fontWeight="bold" fontSize="lg" color="gray.800">{stats.price}</Text>
        </Box>
        <Box>
          <Text color="gray.600">24h Change</Text>
          <Text fontWeight="bold" fontSize="lg" color={parseFloat(stats.change) > 0 ? 'green.500' : 'red.500'}>
            {stats.change}
          </Text>
        </Box>
        <Box>
          <Text color="gray.600">Market Cap</Text>
          <Text fontWeight="bold" fontSize="lg" color="gray.800">{stats.marketCap}</Text>
        </Box>
        <Box>
          <Text color="gray.600">Circulating Supply</Text>
          <Text fontWeight="bold" fontSize="lg" color="gray.800">{stats.supply}</Text>
        </Box>
        <Box>
          <Text color="gray.600">24h Trading Volume</Text>
          <Text fontWeight="bold" fontSize="lg" color="gray.800">{stats.volume}</Text>
        </Box>
        <Box>
          <Text color="gray.600">24h High</Text>
          <Text fontWeight="bold" fontSize="lg" color="gray.800">{stats.high}</Text>
        </Box>
        <Box>
          <Text color="gray.600">Total Supply</Text>
          <Text fontWeight="bold" fontSize="lg" color="gray.800">{stats.supply}</Text>
        </Box>
        <Box>
          <Text color="gray.600">24h Low</Text>
          <Text fontWeight="bold" fontSize="lg" color="gray.800">{stats.low}</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default LiveStats;
