module.exports = function web3WaitForConfirmation(transactionHashHexPrefixed) {
  return new Promise((resolve, reject) => {
    const receipt = web3.eth.getTransactionReceipt(transactionHashHexPrefixed, (err, receipt) => {
      if (receipt === null) {
        setTimeout(() => {
          web3WaitForConfirmation(transactionHashHexPrefixed).then(resolve)
        }, 500)
      } else {
        resolve()
      }
    })
  })
}
