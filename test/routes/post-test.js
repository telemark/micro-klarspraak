'use strict'

const test = require('ava')
const listen = require('test-listen')
const axios = require('axios')
const micro = require('micro')
const srv = require('../../index')
const data = require('../data/dummy.json')

const getUrl = fn => {
  const srv = micro(fn)
  return listen(srv)
}

test('it returns result if text is POSTED', async t => {
  const url = await getUrl(srv)
  const result = await axios.post(url, data)
  t.truthy(result.data.text, 'POST ok - text returned')
  t.truthy(result.data.lix, 'POST ok - lix returned')
  t.truthy(result.data.kanselli, 'POST ok - kanselli returned')
})
