# Blockchain-Secure-Fundraising-Platform

Ethereum based Decenteralised Application, to ensure a secure fundraising platform/website and to ensure zero frauds on name of crowd funding, like kickstart.com,
using smart contracts and Next.Js on frontend. An entrepreneur has to create a campaign then raise a request for a meaningful funding. The request gets approved by 
atleast half of approvers to recieve funding for that request only. (Both approver and manager of a campaign has to pay in ethers to create/donate a campaign).
The amount does not reside in entrepreneur's account, it directly goes to recipent who provides resources. Which ensures no fundraising scams.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MNEUMONIC` : Your metamask mnemonic. 
`RINKEBY`: Link of where you have deployed your smart contract on rinkeby. 
`PRIVATE_KEY`: Private key of your MetaMask.
`DEPLOYED_ADDRESS`: Address where your contract is deployed using remix.


## Installation

Install my-project with npm
Following dependencies with the given version only should be installed before running the project on local. 

Run: "npm i" In root directory. 

"dependencies": {
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "fs-extra": "^10.1.0",
    "ganache": "^7.3.1",
    "mocha": "^10.0.0",
    "module": "^1.2.5",
    "next": "^12.2.1",
    "nodemon": "^2.0.19",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "semantic-ui-css": "^2.4.1",
    "semantic-ui-react": "^2.1.3",
    "solc": "^0.8.15",
    "truffle-hdwallet-provider": "0.0.3",
    "web3": "^1.7.4",
    "web3-eth-contract": "^1.7.4"
 }

Make sure to add "dev": "nodemon server.js" in "scripts" in package.json
"scripts": {
    "test": "mocha",
    "dev": "nodemon server.js"
  },


## Run Locally

Clone the project

```bash
  git clone https://github.com/prayas7102/Blockchain-Secure-Fundraising-Platform/
```

Go to the project root directory

Install dependencies

```bash
  npm install
```

Start the server

```bash
  nodemon server.js
```


## Tech Stack

**Client:** React, Semantic-ui, HTML, Next.js

**Server:** Smart Contract in Solidity and Express.Js 


## Usage/Examples

1. While making any changes in contract, do consider running:: "nodemon compile.js" -> "nodemon deploy.js".

2. To run tests on smart contract, Go to :: /test/Campaign.test.js Run npm run test 

3. Also add/remove "type" : "module" in package.json if there's an error for es2016 import statements.


## Future Scope

1. Better UI.
2. Separate login for approvers and entrepreneurs. 
3. Discussuion forums like reddit for approvers to decide whether to contribute or not.
4. Images for requests using IPFS.

## Lessons Learned

Blockchain technology is changing rapidly everyday, so it's important to keep the project updated in accordance to the recent documentation.
I faced a lot of challenge while using web3.js and solidity, because of the same reason.


## Support

For support, dm on linkedin: https://www.linkedin.com/in/prayas-kumar
