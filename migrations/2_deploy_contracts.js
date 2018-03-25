// #1 get instance of contract(s) to be deployed/migrated
var Calculator = artifacts.require("./Calculator.sol");

module.exports = function(deployer) {
    // #2 Deploy the instance of the contract
    deployer.deploy(Calculator, 10);//, 10);
};