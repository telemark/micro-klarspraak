'use strict'

const readFileSync = require('fs').readFileSync
const marked = require('marked')
const { json, send } = require('micro')
const { parse } = require('url')
const getTextFromUrl = require('./lib/get-text-from-url')
const calculateScore = require('./lib/calculate-score')

module.exports = async (request, response) => {
  const {query} = await parse(request.url, true)
  const data = ['POST'].includes(request.method) ? await json(request) : query

  if ((data.text && data.text.length > 0) || (data.url && data.url.length > 0)) {
    const input = await getTextFromUrl(data.url) || data.text
    const result = calculateScore(input)
    send(response, 200, result)
  } else {
    const readme = readFileSync('./README.md', 'utf-8')
    const html = marked(readme)
    send(response, 200, html)
  }
}
