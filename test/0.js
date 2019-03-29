require('./chai')
require('colors')

process.on('uncaughtException', (error) => {
  throw error
})

require('./localStorageDb')
