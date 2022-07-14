import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // we are in browser and metamask is running
    web3 = new Web3(window.web3.currentProvider);
}
else {
    // we are in server and metamask is not running
    const provider = new Web3.providers.HttpProvider(
        "https://rinkeby.infura.io/v3/d74f06effce04fdcbe3465483b46f07f");
    web3 = new Web3(provider);
}

export default web3;