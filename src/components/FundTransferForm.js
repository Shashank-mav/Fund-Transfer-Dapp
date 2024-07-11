import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { Box, Button, FormControl, FormLabel, Input, VStack, useToast, HStack } from '@chakra-ui/react';

const FundTransferForm = ({ onAccountChange }) => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState('');
  const toast = useToast();

  useEffect(() => {
    onAccountChange(account);
  }, [account, onAccountChange]);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const web3Instance = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWeb3(web3Instance);
        setAccount(accounts[0]);
        toast({
          title: 'Wallet connected',
          description: `Connected account: ${accounts[0]}`,
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      } catch (error) {
        toast({
          title: 'Connection error',
          description: error.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: 'No wallet found',
        description: 'Please install MetaMask.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleTransfer = async () => {
    if (web3 && account) {
      try {
        const value = web3.utils.toWei(amount, 'ether');
        await web3.eth.sendTransaction({
          from: account,
          to: recipient,
          value,
        });
        toast({
          title: 'Transfer successful',
          description: `Transferred ${amount} ETH to ${recipient}`,
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      } catch (error) {
        toast({
          title: 'Transfer error',
          description: error.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: 'Wallet not connected',
        description: 'Please connect your wallet.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={6} borderWidth={1} borderRadius="lg" boxShadow="lg" bg="white" color="gray.800" width="100%">
      <HStack spacing={4}>
      {!account && <Button onClick={connectWallet} colorScheme="purple" size="md">
          Connect Wallet
        </Button> }
        
        {account && (
          <Button onClick={handleTransfer} colorScheme="purple" size="md">
            Transfer
          </Button>
        )}
      </HStack>
      {account && (
        <VStack spacing={4} mt={4} width="100%">
          <FormControl id="recipient">
            <FormLabel>Recipient Wallet Address</FormLabel>
            <Input
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="Enter recipient address"
              bg="gray.100"
              color="gray.800"
            />
          </FormControl>
          <FormControl id="amount">
            <FormLabel>Amount (ETH)</FormLabel>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount in ETH"
              bg="gray.100"
              color="gray.800"
            />
          </FormControl>
        </VStack>
      )}
    </Box>
  );
};

export default FundTransferForm;
