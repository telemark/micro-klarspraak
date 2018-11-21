const { json, send } = require('micro')
const { parse } = require('url')
const getTextFromUrl = require('./lib/get-text-from-url')
const calculateScore = require('./lib/calculate-score')

module.exports = async (request, response) => {
  const { query } = await parse(request.url, true)
  const data = ['POST'].includes(request.method) ? await json(request) : query

  if ((data.text && data.text.length > 0) || (data.url && data.url.length > 0)) {
    const input = await getTextFromUrl(data.url) || data.text
    const result = calculateScore(input)
    send(response, 200, result)
  } else {
    const readme = `
    Usage
    *********************
    POST text to analyze
    curl -d '{"text": "Check me Im a nice text"}' https://klarspraak.micro.t-fk.win
    
    or

    POST url to analyze
    curl -d '{"url": "https://www.telemark.no"}' https://klarspraak.micro.t-fk.win

    License: MIT

    https://github.com/telemark/micro-klarspraak
    `
    send(response, 200, readme)
  }
}
