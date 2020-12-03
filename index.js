'use strict'

const config = require('./config')
const Group = require('./Group')
const Storage = require('./Storage')

module.exports = {
  config,
  group: Group,
  Group,
  storage: Storage,
  Storage
}
