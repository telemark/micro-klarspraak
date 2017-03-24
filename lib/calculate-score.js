'use strict'

const lix = require('lix')
const kanselli = require('check-kansellisten')

module.exports = text => {
  return {
    text: text,
    lix: lix(text),
    kanselli: kanselli(text)
  }
}
