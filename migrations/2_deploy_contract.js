var TodoList = artifacts.require("TodoList.sol"); // migrations for changing state of blockchain, database schema

module.exports = function(deployer) {
  deployer.deploy(TodoList);
};
