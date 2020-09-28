const express = require('express');
const router = express.Router();
const ProductController = require('../controller/ProductController');

router.post('/', ProductController.create);
router.put('/:id', ProductController.update);

router.get('/all', ProductController.all);
router.get('/:id', ProductController.show);



module.exports = router;