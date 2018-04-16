
const express = require('express')
const router = express.Router({ mergeParams: true })

const Host = require('../models/host.js')
// route to display all parties
router.get('/', (request, response) => {
    Host.find({})
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

// route to search for host names
router.get('/:hostID', (request, response) => {
    const hostID = request.params.hostID
    Host.findById(hostID)
        .then((host) => {
            // renders a list of partiess with that name
            response.render('partys/show', {
                host,
                pageTitle: 'List of host'
            })
                .catch((error) => {
                    console.log(error)
                })
        })
})

router.get('/:hostID', (request, response) => {
    const hostID = request.params.hostID
    response.render('cantfind', {
        hostID
    })
        .catch((error) => {
            console.log(error)
        })
        .then((host) => {
            Host.find({})
                .then((partys) => {
                    response.render('hosts/index', {
                        partys,
                        pageTitle: 'All Host'
                    })
                })
                .catch((error) => {
                    console.log(error)
                })
        })

})

module.exports = router