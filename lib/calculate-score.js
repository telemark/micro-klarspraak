const lix = require('lix-index')
const kanselli = require('check-kansellisten')

module.exports = text => {
  return {
    text: text,
    lix: lix(text),
    kanselli: kanselli(text)
  }
}
