const Discord = require('discord.js');
const { ethers } = require('ethers');

// Create a new Discord client
const client = new Discord.Client();
const prefix = '!'; // Change this to your preferred command prefix

// Ethereum JSON-RPC provider URL
const providerUrl = 'YOUR_ETH_JSON_RPC_PROVIDER_URL';

// Initialize Ethereum provider
const provider = new ethers.providers.JsonRpcProvider(providerUrl);

// Contract address and ABI
const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const abi = [
    // Paste your contract ABI here
];

// Function to connect to MetaMask wallet
async function connectWallet() {
    try {
        // Connect to MetaMask wallet
        await ethereum.request({ method: 'eth_requestAccounts' });
        const signer = provider.getSigner();
        return signer;
    } catch (error) {
        console.error('Error connecting to wallet:', error);
        throw error;
    }
}

// Function to register a candidate
async function registerCandidate(args) {
    try {
        const signer = await connectWallet();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        const electionId = args[0];
        const candidateName = args.slice(1).join(' ');
        // Register candidate
        await contract.registerCandidate(electionId, candidateName);
        return `Registered ${candidateName} as a candidate for election ${electionId}`;
    } catch (error) {
        console.error('Error registering candidate:', error);
        return 'An error occurred while registering the candidate.';
    }
}

// Function to cast a vote
async function castVote(args) {
    try {
        const signer = await connectWallet();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        const electionId = args[0];
        const candidateId = args[1];
        // Cast vote
        await contract.vote(electionId, candidateId);
        return `Your vote for candidate ${candidateId} in election ${electionId} has been cast successfully!`;
    } catch (error) {
        console.error('Error casting vote:', error);
        return 'An error occurred while casting your vote.';
    }
}

// Event listener for when the bot is ready
client.once('ready', () => {
    console.log('Bot is ready!');
});

// Event listener for messages
client.on('message', async (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'registercandidate') {
        const response = await registerCandidate(args);
        message.channel.send(response);
    }

    if (command === 'vote') {
        const response = await castVote(args);
        message.channel.send(response);
    }
});

// Log in to Discord with your app's token
client.login('YOUR_DISCORD_BOT_TOKEN');
