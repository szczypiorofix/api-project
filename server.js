require('dotenv').config();

const server = require('./core/core');

const PORT = process.env.SERVER_PORT || 3000;
const mongoDbAddress = process.env.MONGODB_ADDRESS;


server.init();

server.listenCallback = function() {
    console.log(`Express server listening on port ${ PORT }`);
}

server.mongoDbConnect( mongoDbAddress, PORT );


