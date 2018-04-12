// Referenced mongoose
const mongoose = require('mongoose')
const Schema = require('../db/schema')
// Refereneced party Schema
const party = mongoose.model('party', schema.partySchema)

module.exports = party