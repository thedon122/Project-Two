import { request } from 'https';

const express = require('express')
const router = express.Router()
const Host = require('../models/host.js')

router.get('/', (request, response) => {
    const hostID = request.params
    Host.findById({})
        .then((host) => {
            response.render('users/index', {
                users,
                pageTitle: 'Home'
            })
        })
})