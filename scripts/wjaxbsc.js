const { ethers, upgrades } = require("hardhat");

void async function main() {
  const [owner] = await ethers.getSigners();
  console.log(owner.address);
  const JaxBridge = await ethers.getContractFactory("WjaxBscBridge");
  const jaxBridge = await JaxBridge.deploy();
  console.log("wjxn2jxn", jaxBridge.address);
}();