require("@nomiclabs/hardhat-waffle");
require('dotenv').config({ path: './.env.local' });

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
})

//const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY
const privateKey = 'dc24f597c44c9b3ad241d9e067f98130db368d29321a4d25dedf9ebe46cd4ad0' //ganche wallet private key
/*
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: process.env.NEXT_PUBLIC_RPC_URL,
      accounts: [privateKey]
    }
  }
};
*/
 module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "ganache",
  networks: {
    hardhat: {},
    ganache: {
      url: "HTTP://127.0.0.1:7545",
      accounts: [privateKey]
    }
  }
};



