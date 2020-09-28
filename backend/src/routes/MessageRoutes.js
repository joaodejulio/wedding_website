const express = require('express');
const router = express.Router();
const MessageController = require('../controller/MessageController');
const MessageValidation = require('../middlewares/MessageValidation');


router.post('/', MessageValidation, MessageController.create);
router.get('/all', MessageController.all);


module.exports = router;