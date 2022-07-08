import web3 from './web3';

const compiledFactory = require('./build/CampaignFactory.json');
const compiledCampaign = require('./build/Campaign.json');

const address = web3.utils.toChecksumAddress(process.env.DEPLOYED_ADDRESS)
const Instance = new web3.eth.Contract(
    (compiledFactory.abi), `${address}`
);

export default Instance;