
const express = require('express')
const router = express.Router()
const Host = require('../models/host.js')
// route to display all host
router.get('/', (request, response) => {
    Host.find({})
        .then((hosts) => {
            response.render('hosts/index', {
                hosts,
                pageTitle: 'All Host'
            })
        })
        .catch((error) => {
            console.log(error)
        })
})
router.get('/new', (request, response) => {
    response.render('hosts/new', { pageTitle: 'New Host' })
  })

  router.post('/', (request, response) => {
      const newHost = request.body
      if (!newHost.photoUrl) {
        newHost.photoUrl = 'data:image/jpeg;base64,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'
      }
      Host.create(newHost)
      .then(() => {
          response.redirect('hosts')
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
            Host.find({})
                .then((hosts) => {
                    response.render('hosts/index', {
                        hosts,
                        pageTitle: 'All Host'
                    })
                })
                .catch((error) => {
                    console.log(error)
                })
        })

})

  router.get('/:hostId/edit', (request, response) => {
    const hostId = request.params.hostId
  
    Host.findById(hostId)
      .then((host) => {
        response.render('hosts/edit', {
          host,
          pageTitle: 'Host_Update'
        })
      })
      .catch((error) => {
        console.log(error)
      })
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
  
    Host.findByIdAndUpdate(hostId, updatedHostInfo, { new: true })
      .then(() => {
        response.redirect(`/hosts/${hostId}`)
      })
  })

  module.exports = router