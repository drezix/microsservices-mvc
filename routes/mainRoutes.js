const express = require('express');
const router = express.Router();
const { getHomePage, processName } = require('../controllers/mainController');

router.get('/', getHomePage);

router.get('/transform/:name', processName);

module.exports = router;
