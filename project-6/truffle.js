const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "c5a646d3ab434894b44820f42285fe0a"

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "4447" // Match any network id
    },
    goerli: {
      provider: () => new HDWalletProvider(mnemonic, `https://goerli.infura.io/v3/${infuraKey}`),
      network_id: "*",
      gas: 3000000,
      confirmations: 2,
      timeoutBlocks: 99999999999999999999999999999,
      // networkCheckTimeout: 99999999999999999999999999999999,
      skipDryRun: true
    }
  }
};
