
const express = require('express');
require('express-group-routes');
const router = express.Router();
const controller = require('../controllers')
const { body, validationResult } = require('express-validator');
const {Authenticate} = require("../../services").services

router.group('/', (router) => {

    router.get('/', controller.HomeController.docs);
    router.group('/api/v1/', (router) => {
        router.get('/home', controller.HomeController.home)
    }) 
})



module.exports = router;