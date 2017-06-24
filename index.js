'use strict'

const dns = require('dns')

const pify = require('pify')

module.exports = domain =>
  pify(dns.resolveMx)(domain).then(records =>
    records.sort((a, b) => a.priority > b.priority)
  )
