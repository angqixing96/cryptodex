module.exports = {
  networks: { // specify type of network to connect to
    development: {
      host: "127.0.0.1",
      port: 7545, // connected to personal local ganache blockchain network
      network_id: "*" // Match any network id
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}