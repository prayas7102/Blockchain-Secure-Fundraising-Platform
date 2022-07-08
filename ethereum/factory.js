import web3 from './web3';
require("dotenv").config({ path: '../.env' });
const compiledFactory = require('./build/CampaignFactory.json');
const compiledCampaign = require('./build/Campaign.json');

const instance = new web3.eth.Contract(
    (compiledFactory.abi), `${process.env.DEPLOYED_ADDRESS}`
);

export default instance;