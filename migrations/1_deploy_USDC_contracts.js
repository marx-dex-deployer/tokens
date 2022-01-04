const FiatTokenV2_1 = artifacts.require("FiatTokenV2_1");

module.exports = async function (deployer, _network, addresses) {
  let tokenName = 'USD Coin';
  let tokenSymbol = 'USDC';
  let tokenCurrency = 'USD';
  let tokenDecimals = 6;
  
  let newMasterMinter = addresses[0];
  let newPauser = addresses[0];
  let newBlacklister = addresses[0];
  let newOwner = addresses[0];
  
  let initialSupply = '10000000000000000';
  
  await deployer.deploy(FiatTokenV2_1);
  
  const usdcContract = await FiatTokenV2_1.deployed();
  
  await usdcContract.initialize(
    tokenName,
    tokenSymbol,
    tokenCurrency,
    tokenDecimals,
    newMasterMinter,
    newPauser,
    newBlacklister,
    newOwner
  );
  
  await usdcContract.configureMinter(addresses[0], initialSupply)
  await usdcContract.mint(addresses[0], initialSupply);
};
