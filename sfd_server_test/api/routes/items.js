const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Get requests to /items'
    });
})

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Post requests to /items'
    });
})

router.get('/:itemId', (req, res, next) => {
    const id = req.params.itemId;
    res.status(200).json({
        message: 'Item ID: ' + id,
    });
})

module.exports = router