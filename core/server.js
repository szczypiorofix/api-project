
const express = require('express');
const expressApp = express();

const userRouter = require('../routes/user');
const logger = require('../middlewares/logger');




expressApp.use( logger );
expressApp.use( express.json() );
expressApp.set('view engine', 'ejs');


expressApp.get('/', (req, res) => {
    res.render('index');
});


expressApp.use( '/user', userRouter );


module.exports = expressApp;
