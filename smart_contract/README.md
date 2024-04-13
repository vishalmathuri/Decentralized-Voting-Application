# Decentralized Voting Smart Contract

This smart contract is designed to manage the voting process in a decentralized manner on the Ethereum blockchain. It allows for creating elections, registering candidates, and casting votes.

## Features

- **Election Creation**: Allows the contract owner to create a new election with a specified name.
- **Candidate Registration**: Allows the registration of candidates for a specific election.
- **Vote Casting**: Enables voters to cast their votes for candidates in active elections.
- **Vote Counting**: Provides functions to retrieve the total vote count for each candidate in an election.

## Usage

### 1. Create a New Election

To create a new election, call the `createElection` function with the desired name of the election.

### 2. Register Candidates

Once an election is created, candidates can be registered for that election using the `registerCandidate` function. Provide the election ID and the name of the candidate to register.

### 3. Cast Votes

Voters can cast their votes for candidates in active elections by calling the `vote` function. Provide the election ID and the ID of the candidate the voter wishes to vote for.

### 4. Retrieve Vote Counts

To retrieve the total vote count for a specific candidate in an election, use the `getVoteCount` function. Provide the election ID and the ID of the candidate.

## Security Considerations

- **Access Control**: The contract includes modifiers and checks to ensure that only the contract owner can create elections and that users can only interact with active elections.
- **Input Validation**: Functions include input validation to prevent invalid inputs and ensure the integrity of the voting process.
- **Immutable Storage**: Election data is stored immutably on the blockchain, ensuring transparency and integrity.

## Deployment

Compile the smart contract using a Solidity compiler (e.g., Remix or Truffle) and deploy it to the Ethereum blockchain using a wallet like MetaMask or Remix.

## Further Improvements

- Implement additional security features such as role-based access control.
- Add functionality for ending elections and declaring winners automatically.
- Enhance user experience with event-driven notifications for election status updates.

