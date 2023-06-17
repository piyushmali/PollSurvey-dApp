require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const ALCHEMY_SEPOLIA_URL = "url";
const PRIVATE_KEY = "key";
module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: ALCHEMY_SEPOLIA_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
