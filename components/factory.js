import compiledFactory from '../ethereum/build/CampaignFactory.json' assert { type: 'json' };
import Contract from 'web3-eth-contract';

Contract.setProvider("https://goerli.infura.io/v3/d74f06effce04fdcbe3465483b46f07f");

const Instance = new Contract(
    (compiledFactory.abi),
    "0xCcA492AeB454F1dCa2E4c0328556A1FB1139fDA7",
);
const res = Instance.methods.getDeployedCampaigns().call();
console.log(res);
export default Instance;
// use this command to run this file : node --experimental-json-modules factory.js