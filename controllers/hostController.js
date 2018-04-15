
const express = require('express')
const router = express.Router()
const Host = require('../models/host.js')
// route to display all host
router.get('/', (request, response) => {
    User.find({})
        .then((hosts) => {
            response.render('users/index', {
                hosts,
                pageTitle: 'All Host'
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
            // renders a list of hosts
            response.render('hosts/show', {
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
            User.find({})
                .then((hosts) => {
                    response.render('users/index', {
                        hosts,
                        pageTitle: 'All Host'
                    })
                })
                .catch((error) => {
                    console.log(error)
                })
        })

})
router.get('/new', (request, response) => {
    response.render('hosts/new', { pageTitle: 'New Host' })
  })

  router.get('/:userId/delete', (request, response) => {
    const userId = request.params.userId
  
    User.findByIdAndRemove(userId)
      .then(() => {
        response.redirect('/users')
      })
      .catch((error) => {
        console.log(error)
      })
  })
  
  router.put('/:hostId', (request, response) => {
    const hostId = request.params.hostId
    const updatedHostInfo = request.body
  
    User.findByIdAndUpdate(hostId, updatedHostInfo, { new: true })
      .then(() => {
        response.redirect(`/hosts/${hostId}`)
      })
  })