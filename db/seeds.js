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
        partyName: 'newMarvelParty',
        location: '4577 there Street',
        city: 'Alpharetta',
        state: 'FL',
        date: '06/14/19',
        time: 'PM 5:00',
        theme: 'super hero',
        pictureurl: 'https://photos.zillowstatic.com/p_h/ISinlvqxkvh04p0000000000.jpg'
      })
       const luke = new partyGoer({
        partyGoerName: 'Luke Cage',
        costume: 'Iron man',
        food: 'Lays chips',
        gift: 'Season 1 of Game of Thrones',
        contactEmail: 'callMe@unknown.com',
        contactNumber: '5345784974',
        pictureUrl: 'https://i.ytimg.com/vi/0UGYyVjpHjo/maxresdefault.jpg'
       })
       const mary = new partyGoer({
        partyGoerName: 'Mary Sue',
        costume: 'Ms Marvel',
        food: 'Soda',
        gift: 'Gift card',
        contactEmail: 'random@unknown.com',
        contactNumber: '8369294350',
        pictureUrl: 'https://i.ytimg.com/vi/0UGYyVjpHjo/maxresdefault.jpg'
       })
       marvelParty.partyGoerParty.push(luke)
       marvelParty.partyGoerParty.push(mary)
       hanna.hostToParty.push(marvelParty)
       const dcParty = new party({
        partyName: 'SliverAgeOfDC',
        location: 'anyWhere Street',
        city: 'Atlanta',
        state: 'GA',
        date: '04/03/19',
        time: 'PM 7:00',
        theme: 'super hero',
        pictureurl: 'https://photos.zillowstatic.com/p_h/ISinlvqxkvh04p0000000000.jpg'
      })
      const mary = new partyGoer({
        partyGoerName: 'Jane Hale',
        costume: 'Super girl',
        food: 'boneless chicken wings',
        gift: 'her self',
        contactEmail: 'notreal@unknown.com',
        contactNumber: '4602931233',
        pictureUrl: 'https://i.ytimg.com/vi/0UGYyVjpHjo/maxresdefault.jpg'
       })
      dcParty.partyGoerParty.push(mary)
      hanna.hostToParty.push(dcParty)
       return hanna.save()
  }).then(()=> {
    mongoose.connection.close()
    console.log(`
        Finished seeding database...
        
        Disconnected from MongoDB
      `)
  })