const router = express.Router({ mergeParams: true })
const express = require('express')
const router = express.Router()
const PartyGoer = require('../models/partyGoer.js')
// route to display all parties
router.get('/', (request, response) => {
    User.find({})
        .then((partys) => {
            response.render('users/index', {
                partys,
                pageTitle: 'All Parties'
            })
        })
        .catch((error) => {
            console.log(error)
        })
})