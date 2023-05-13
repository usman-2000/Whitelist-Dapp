const { ethers } = require("hardhat");

async function main() {
  const whitelistContract = await ethers.getContractFactory("Whitelist");
  const deployedWhiteListContract = await whitelistContract.deploy(10);
  deployedWhiteListContract.deployed();

  console.log(
    `Whitelist contract address is : ${deployedWhiteListContract.address}`
  );
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
