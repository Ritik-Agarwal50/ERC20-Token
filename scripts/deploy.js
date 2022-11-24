const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
async function main() {
  const erc20 = await ethers.getContractFactory("ERC20");
  const _erc20 = await erc20.deploy();
  await _erc20.deployed();
  console.log("Address of erc20 tokwn is: ", _erc20.address);
  // console.log(process.env.PRIVATE_KEY);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit();
  });
