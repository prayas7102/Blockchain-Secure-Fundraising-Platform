const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
require("dotenv").config({ path: '../.env' });

const compiledFactory = require('./build/CampaignFactory.json');
const compiledCampaign = require('./build/Campaign.json');

const provider = new HDWalletProvider(
    `${process.env.MNEUMONIC}`,
    `${process.env.RINKEBY}`,
);

const web3 = new Web3(provider)
const deploy = async () => {
    accounts = await web3.eth.getAccounts();
    // console.log('deploying from', accounts[0])
    const result = await new web3.eth.Contract(compiledFactory.abi)
        .deploy({ data: compiledFactory.evm.bytecode.object })
        .send({ from: accounts[0], gas: '90000000' })

    // new web3.eth.Contract(compiledFactory.abi)
    //     .deploy({ data: compiledFactory.evm.bytecode.object })
    //     .send({ from: accounts[0], gas: '90000000' })

    // new web3.eth.Contract([...], '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe', {
    //     from: '0x1234567890123456789012345678901234567891', // default from address
    //     gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
    // });

    console.log('contract deployed to', result.options.address);
}
deploy();