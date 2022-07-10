const Dotenv = require('dotenv-webpack');
require("dotenv").config({ path: './.env' });
console.log(process.env.DEPLOYED_ADDRESS)
module.exports = {
  plugins: [
    new Dotenv({
      DEPLOYED_ADDRESS: process.env.DEPLOYED_ADDRESS,
      MNEUMONIC: process.env.MNEUMONIC,
      RINKEBY: process.env.RINKEBY
    })
  ]
};