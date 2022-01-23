const IERC20 = artifacts.require("IERC20")

module.exports = async function (callback) {
  const network = config.network
  
  if (network != 'evmos') {
    throw new Error('No MarX DEX contracts on this network!')
  }
  
  try {
    const routerAddress = '0x20eA71c29200B89D227086F1C866a4C59441Bdf6'
    
    const usdcAddress = '0xdcB434b0C8c8c7C6b6b61990B2A87C2c3B1B1F83'
    const daiAddress = '0x60154b6844ED3B8CbD4636244bdE43Bb06a0e68D'
    
    console.log("Approve USDC")
    let usdcContract = await IERC20.at(usdcAddress)
    await usdcContract.approve(routerAddress, '100000000000')
    
    console.log("Approve DAI")
    let daiContract = await IERC20.at(daiAddress)
    await daiContract.approve(routerAddress, '100000000000000000000000')
  }
  catch(error) {
    console.log(error)
  }
  
  callback(`Complete!`)
};
