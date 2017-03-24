'use strict'

const axios = require('axios')
const stripTags = require('striptags')

module.exports = url => {
  return new Promise(async (resolve, reject) => {
    let result = false
    if (!url || !url.length > 0) {
      resolve(false)
    } else {
      try {
        const page = await axios(url)
        result = stripTags(page.data, [], ' ')
        resolve(result)
      } catch (error) {
        reject(error)
      }
    }
  })
}
