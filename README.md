# Decentralized-Voting-Application
# Decentralized Voting Application

The decentralized voting application allows users to participate in elections securely using blockchain technology.
It consists of three main components: a smart contract deployed on the Ethereum blockchain, a web-based front-end, and a Discord bot.

## Folder Structure


1. smart_contract
   a. Voting.sol
   b. README.md
2. web_front_end/
   a. index.html
   b. styles.css
   c. ethers.js
   d. app.js

3. discord_bot/
   a. bot.js
   b. package.json

4. README.md


- **smart_contract**: Contains the Solidity smart contract code for managing the voting process.
- **web_front_end**: Includes the HTML, CSS, and JavaScript files for the web-based front-end of the application.
- **discord_bot**: Contains the Discord bot script implemented in Node.js using Discord.js library.
- **README.md**: Documentation providing instructions for setting up and running the decentralized voting application.

## Components

1. **Smart Contract**: Written in Solidity, the smart contract manages elections, candidate registration, and voting on the Ethereum blockchain.
2. **Web Front-End**: A user-friendly interface that allows users to interact with the voting application through a web browser. Users can view ongoing elections, register as candidates, and cast votes.
3. **Discord Bot**: Provides an alternative interface for users to interact with the voting application via Discord. Users can use commands to perform actions such as viewing ongoing elections, registering as candidates, and casting votes.

## Setup and Running Instructions

- **Smart Contract Deployment**: Deploy the Solidity smart contract to the Ethereum blockchain using a wallet like MetaMask or Remix.
- **Web Front-End**: Host the HTML, CSS, and JavaScript files on a web server. Install MetaMask browser extension and connect to the Ethereum network. Access the front-end using a web browser.
- **Discord Bot**: Create a new Discord application and bot on the Discord Developer Portal. Install Node.js and Discord.js library. Implement the bot script and run it using Node.js.

## Design Decisions

- **Blockchain Technology**: Ethereum blockchain is chosen for its security and wide adoption in the blockchain space.
- **User Interfaces**: Both web-based and Discord interfaces are provided to cater to users' preferences and increase accessibility.
- **Security**: User authentication and authorization are implemented using MetaMask for the web front-end. Discord bot commands are restricted to authorized users.

## Interactions between Components

- **Smart Contract and Web Front-End**: The front-end communicates with the Ethereum blockchain using the ethers.js library to interact with the smart contract.
- **Smart Contract and Discord Bot**: The Discord bot communicates with the Ethereum blockchain using ethers.js to execute commands and retrieve information from the smart contract.
- **User Interactions**: Users interact with the application through either the web front-end or the Discord bot by performing actions such as viewing ongoing elections, registering as candidates, and casting votes.

## Conclusion

The decentralized voting application provides a secure, transparent, and user-friendly platform for conducting elections using blockchain technology. By leveraging Ethereum smart contracts and providing multiple interfaces for users to interact with the application, it offers flexibility and accessibility while ensuring the integrity of the voting process.
