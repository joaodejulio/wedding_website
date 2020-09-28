const express = require('express');
const router = express.Router();
const ImageController = require('../controller/ImageController');

router.post('/', ImageController.create);


module.exports = router;