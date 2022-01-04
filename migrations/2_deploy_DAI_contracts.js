const Dai = artifacts.require("Dai");

module.exports = async function (deployer, _network, addresses) {
  let initialSupply = '1000000000000000000000000000';
  let chainId = 1;
  
  await deployer.deploy(Dai, chainId);
  
  const daiContract = await Dai.deployed();
  
  await daiContract.mint(addresses[0], initialSupply);
};
