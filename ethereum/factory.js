import web3 from './web3.js';
import compiledFactory from './build/CampaignFactory.json';

const address = web3.utils.toChecksumAddress(process.env.DEPLOYED_ADDRESS)
const Instance = new web3.eth.Contract(
    (compiledFactory.abi), `${address}`
);

Instance.options.address = '0x7290468c20b0EE00B11Ce977dF054E7F630672f1';
export default Instance;