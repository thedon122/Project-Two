import { request } from 'https';

const router = express.Router({ mergeParams: true })
const express = require('express')
const router = express.Router()
const Party = require('../models/party.js')

router.get('/', (request, response) => {
    Party.findById
})