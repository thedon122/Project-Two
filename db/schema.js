// Reference the database 
const mongoose = require('mongoose')
const Schema = mongoose.Schema
// creating a promise that can be used thourgh out the application
mongoose.Promise = global.Promise