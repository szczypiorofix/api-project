const express = require('express');
const jsonContentType = require('../middlewares/json');
const { getUser } = require('../controllers/user.controller');


const router = express.Router();

router.use( jsonContentType );

router.get('/', getUser);


router.get('/new', (req, res) => {
    res.status(200).send({"data": "user new request"});
});


module.exports = router;
