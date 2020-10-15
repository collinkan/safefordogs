const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Get requests to /items'
    });
})

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Post requests to /items'
    });
})

router.get('/:item_id', (req, res, next) => {
    const id = req.params.item_id;
    res.status(200).json({
        message: 'Item ID: ' + id,
    });
})

router.patch('/:item_id', (req, res, next) => {
    const id = req.params.item_id;
    res.status(200).json({
        message: 'Upated item ' + id,
    });
})

router.delete('/:item_id', (req, res, next) => {
    const id = req.params.item_id;
    res.status(200).json({
        message: 'Deleted item ' + id,
    });
})

module.exports = router