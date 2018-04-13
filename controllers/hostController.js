import { request } from 'https';

const express = require('express')
const router = express.Router()
const Host = require('../models/host.js')

router.get('/', (request, response) => {
    Host.find({})
    .then(())
})