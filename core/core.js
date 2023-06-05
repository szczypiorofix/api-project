const express = require('express');
const expressApp = express();

const mongoose = require('mongoose');

const userRouter = require('../routes/user');
const logger = require('../middlewares/logger');



const coreApp = {

    app: expressApp,

    listenCallback: null,

    init() {
        this.app = expressApp;
        this.app.use( logger );
        this.app.use( express.json() );
        this.app.set('view engine', 'ejs');
        this.app.get('/', (req, res) => {
            res.render('index');
        });
        this.app.use( '/user', userRouter );
    },

    mongoDbConnect(url, port) {
        mongoose
            .connect( url )
            .then(() => {
                this.app.listen( port, this.listenCallback );
            })
            .catch(err => {
                console.error('Error connecting to MongoDB:', err)
            })
        
    }

}

module.exports = coreApp;
