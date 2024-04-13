// Import ethers.js library
import { ethers } from 'ethers';

// Ethereum JSON-RPC provider URL
const providerUrl = 'YOUR_ETH_JSON_RPC_PROVIDER_URL';

// Initialize Ethereum provider
const provider = new ethers.providers.JsonRpcProvider(providerUrl);

// Function to connect to MetaMask wallet
async function connectWallet() {
    try {
        // Request access to MetaMask wallet
        await ethereum.request({ method: 'eth_requestAccounts' });
        // Get signer
        const signer = provider.getSigner();
        return signer;
    } catch (error) {
        console.error('Error connecting to wallet:', error);
        throw error;
    }
}

// Function to get contract instance
function getContractInstance(contractAddress, abi, signer) {
    // Initialize contract instance
    const contract = new ethers.Contract(contractAddress, abi, signer);
    return contract;
}

// Export functions
export { connectWallet, getContractInstance };
