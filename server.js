require('dotenv').config();
const PORT = process.env.SERVER_PORT || 3000;

const expressApp = require('./core/server');


expressApp.listen( PORT, () => {
    console.log(`Express server listening on port ${ PORT }`);
});

