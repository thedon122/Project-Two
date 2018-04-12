// Referenced mongoose
const mongoose = require('mongoose')
const Schema = require('../db/schema')
// Refereneced host Schema
const host = mongoose.model('host', Schema.hostSchema)

module.exports = host