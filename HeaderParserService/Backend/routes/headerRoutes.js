const express = require('express');
const router = express.Router();

// Use single quotes or double quotes around the path to your controller file
const Controller = require('../controllers/headerControllers.js');

router.get('/whoami', Controller.fetchIt);

module.exports=router;
