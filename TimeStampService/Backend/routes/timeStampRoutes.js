const express = require('express');
const router = express.Router();

// Use single quotes or double quotes around the path to your controller file
const timeStampController = require('../controllers/timeStamp.js');

router.get('/:date', timeStampController.timeStampDate);

module.exports=router;
