require('dotenv').config()
const host = require('../models/host')
const party = require('../models/party')
const partyGoer = require('../models/partyGoer')
const mongoose = require('mongoose')
// connect to database
mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.once('open', () => {
    console.log(`Mongoose has connected to MongoDB`)
  })
  
  mongoose.connection.on('error', (error) => {
    console.error(`
    MongoDB connection error!!!
    ${error}`)
    process.exit(-1)
  })
  host.remove({}).then(() => {
      const hanna = new host({
        name: 'Hannah',
        contactEmail: 'fakeemail@unknown.com',
        contactNumber: '5356224264',
        pictureUrl: 'https://cdn.theatlantic.com/assets/media/img/mt/2014/12/RTR400XW/lead_large.jpg?1522683702'
      })

      const marvelParty = new party({
        partyName:
        location:
        Date:
      }) 
  })