// Referenced mongoose
const mongoose = require('mongoose')
const Schema = require('../db/schema')
// Refereneced party Schema
const party = mongoose.model('party', Schema.partySchema)

module.exports = party