import compiledFactory from './build/CampaignFactory.json' assert { type: 'json' };
import Contract from 'web3-eth-contract';

Contract.setProvider("https://rinkeby.infura.io/v3/d74f06effce04fdcbe3465483b46f07f");

const Instance = new Contract(
    (compiledFactory.abi),
    "0x81E3bE14e1Dba985c46d899E905635a7fB4656Ee",
);
const res = await Instance.methods.getDeployedCampaigns().call();
console.log(res);
export default Instance;
// use this command to run this file : node --experimental-json-modules factory.js