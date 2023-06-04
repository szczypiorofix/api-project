const express = require('express');
const jsonContentType = require('../middlewares/json');

const router = express.Router();

router.use( jsonContentType );


router.get('/', (req, res) => {
    res.status(200).send({"data": "user default request"});
});

router.get('/new', (req, res) => {
    res.status(200).send({"data": "user new request"});
});


module.exports = router;
