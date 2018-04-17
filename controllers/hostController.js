
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
        newHost.photoUrl = 'http://www.pittjcs.org/tekko2018/wp-content/uploads/sites/15/2017/01/cosplay-group-2.jpg'
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
  router.get('/:hostId/delete', (request, response) => {
    const hostId = request.params.hostId
  
    Host.findByIdAndRemove(hostId)
      .then(() => {
        response.redirect('/hosts')
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