// Referenced mongoose
const mongoose = require('mongoose')
const Schema = require('../db/schema')
// Refereneced party Schema
const partyGoer = mongoose.model('partyGoer', Schema.partyGoer)

module.exports = partyGoer