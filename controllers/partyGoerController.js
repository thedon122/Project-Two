const express = require('express')
const router = express.Router({ mergeParams: true })

const Host = require('../models/host.js')
// route to display all parties
router.get('/new', (request, response) => {
    const hostId = request.params.userId
    const partyId = request.params.storeId

    Host.findById(hostId)
        .then((host) => {
            const party = host.partys.id(partyId)

            response.render('hosts/new', {
                hostId,
                party,
                pageTitle: 'New Party Goer'
            })
        })
})


module.exports = router