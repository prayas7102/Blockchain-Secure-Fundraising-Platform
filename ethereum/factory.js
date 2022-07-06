import web3 from './web3'
const compiledFactory = require('./build/CampaignFactory.json');
const compiledCampaign = require('./build/Campaign.json');

const instance = new web3.eth.Contract(
    (compiledFactory.abi), ''
);

export default instance;