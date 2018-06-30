const ccurl = require('ccurl-prizz')

async function pow({ trytes, minWeightMagnitude }) {
  return new Promise((resolve, reject) => {
    ccurl.ccurl_pow.async(trytes, minWeightMagnitude, function(error, processedTrytes) {
      if(error) {
        return reject(error)
      }
      if(!processedTrytes) {
        return reject('Missing processedTrytes')
      }
      resolve(processedTrytes)
    })
  })
}

module.exports = {
  pow
}