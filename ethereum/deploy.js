const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
require("dotenv").config({ path: '../.env' });

const compiledFactory = require('./build/CampaignFactory.json');
const compiledCampaign = require('./build/Campaign.json');


const provider = new HDWalletProvider(
    `${process.env.MNEUMONIC}`,
    `${process.env.RINKEBY}`,
);

const web3 = new Web3(provider);

const deploy = async () => {
    accounts = await web3.eth.getAccounts();
    const result = await new web3.eth.Contract(compiledFactory.abi)
        .deploy({ data: "0x" + compiledFactory.evm.bytecode.object })
        .send({
            from: accounts[0], gas: 1249554, gasPrice: '3000000000'
        })
    console.log('contract deployed to', result.options.address);
    provider.engine.stop();
}
deploy();