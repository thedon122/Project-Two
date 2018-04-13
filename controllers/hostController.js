import { request } from 'https';

const express = require('express')
const router = express.Router()
const Host = require('../models/host.js')

router.get('/:hostID', (request, response) => {
    const hostID = request.params.hostID
    Host.findById(hostID)
        .then((host) => {
            response.render('host/show', {
                host,
                pageTitle: 'List of host'
            })
            .catch((error) => {
                console.log(error)
            })
        })
})