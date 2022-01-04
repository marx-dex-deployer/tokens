const IERC20 = artifacts.require("IERC20")

module.exports = async function (callback) {
  const network = config.network
  
  if (network != 'evmos') {
    throw new Error('No MarX DEX contracts on this network!')
  }
  
  try {
    const routerAddress = '0x946EeA3cCc0d0AB3A09a6bcD7cD0Bf21A39508A3'
    const usdcAddress = '0xdcB434b0C8c8c7C6b6b61990B2A87C2c3B1B1F83'
    const daiAddress = '0x60154b6844ED3B8CbD4636244bdE43Bb06a0e68D'
    const marxAddress = '0x0Cc6b6EeEa2B77d4122788e0cE5f0cf9366B1F7D'

    console.log("Approve USDC")
    let usdcContract = await IERC20.at(usdcAddress)
    await usdcContract.approve(routerAddress, '100000000000')
    
    console.log("Approve DAI")
    let daiContract = await IERC20.at(daiAddress)
    await daiContract.approve(routerAddress, '100000000000000000000000')
    
    console.log("Approve MARX")
    let marxContract = await IERC20.at(marxAddress)
    await marxContract.approve(routerAddress, '100000000000000000000000')
  }
  catch(error) {
    console.log(error)
  }
  
  callback(`Complete!`)
};
