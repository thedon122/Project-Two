import { request } from 'https';

const router = express.Router({ mergeParams: true })
const express = require('express')
const router = express.Router()
const Party = require('../models/party.js')
// route to search for party names
router.get('/:partyID', (request, response) => {
    const partyID = request.params.id
    Party.findById(partyID)
    .then((party) => {
        // renders a list of parties
        response.render('party/show', {
            Party,
            pageTitle: 'List of host'
        })
        .catch((error) => {
            console.log(error)
        })
    })
})