
# Fund Transfer dApp

Fund Transfer dApp is a decentralized application built using React and Web3.js that allows users to transfer Ethereum (ETH) from one wallet to another using MetaMask. The application connects to the MetaMask wallet and enables users to input a recipient wallet address and the amount of ETH to transfer.

## Features

- Connect to MetaMask wallet
- Input recipient wallet address
- Input the amount of ETH to transfer
- Display live ETH balance and various statistics such as price, 24h change, market cap, etc.
- User-friendly interface with Chakra UI

## Technologies Used

- React
- Web3.js
- MetaMask
- Chakra UI
- Axios
- CryptoCompare API
- Etherscan API

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- MetaMask extension installed in your browser
- A CryptoCompare API key
- An Etherscan API key

## Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the repository


git clone https://github.com/Shashank-mav/Fund-Transfer-Dapp.git
cd fund-transfer-dapp

### 2. Install dependencies

npm install

### 3. Create a .env file
Create a .env file in the root of the project and add your CryptoCompare API key and Etherscan API key:

REACT_APP_CRYPTOCOMPARE_API_KEY=your_cryptocompare_api_key
REACT_APP_ETHERSCAN_API_KEY=your_etherscan_api_key

### 4. Start the development server

npm start
The application will be available at http://localhost:3000.

### Usage
Connect Wallet
Click the "Connect Wallet" button to connect your MetaMask wallet.
Grant permission to connect to your MetaMask account.
Transfer ETH
After connecting your wallet, input the recipient's wallet address and the amount of ETH to transfer.
Click the "Transfer" button to initiate the transfer.
Confirm the transaction in MetaMask.
View Live Stats
The application displays live statistics such as:

- ETH Balance
- Price
- 24h Change
- Market Cap
- Circulating Supply
- 24h Trading Volume
- 24h High
- 24h Low
- Total Supply


Fork the repository
Create a new branch (git checkout -b feature-branch)
Make your changes
Commit your changes (git commit -m 'Add some feature')
Push to the branch (git push origin feature-branch)


### License
This project is licensed under the MIT License.

Contact
If you have any questions or suggestions, feel free to reach out to me:

GitHub: Shashank-mav
