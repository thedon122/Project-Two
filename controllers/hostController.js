import { request } from 'https';

const express = require('express')
const router = express.Router()
const Host = require('../models/host.js')
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