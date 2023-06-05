const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

const jsonContentType = require('../middlewares/json');
const { getAllUses, getUser, postUser } = require('../controllers/user.controller');


router.use( jsonContentType );

router.get( '/', getAllUses );
router.get( '/:id', getUser );
router.post( '/', bodyParser.urlencoded( {extended: true } ), postUser );


router.get('/new', (req, res) => {
    res.status(200).send({"data": "user new request"});
});


module.exports = router;
