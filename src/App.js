import React, { useState } from 'react';
import { Box, Container, Heading, HStack, Button } from '@chakra-ui/react';
import FundTransferForm from './components/FundTransferForm';
import LiveStats from './components/LiveStats';

const App = () => {
  const [account, setAccount] = useState('');

  const handleAccountChange = (newAccount) => {
    setAccount(newAccount);
  };

 

  return (
    <Box bg="gray.50" color="gray.800" minH="100vh">
      <Box bg="white" p={4} boxShadow="md">
        <Container maxW="container.xl" display="flex" justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg" color="purple.600">
            Fund Transfer dApp
          </Heading>
          
        </Container>
      </Box>
      <Container maxW="full" centerContent py={8}>
        <FundTransferForm onAccountChange={handleAccountChange} />
        {account && <LiveStats account={account} /> }
        
      </Container>
    </Box>
  );
};

export default App;
