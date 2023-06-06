import dotenv from "dotenv";
import CoreApp from "./core/core";

dotenv.config();

import currentEnvironment from './configs/config';

const PORT = currentEnvironment.port;
const mongoDbAddress = process.env.MONGODB_ADDRESS ?? "";

const coreApp = CoreApp();

coreApp.init();

coreApp.app.listen(PORT, () => {
    console.log(`Express server started at port ${PORT}.`);
});

(async () => {
    await coreApp
        .mongoDbConnect(mongoDbAddress)
        .then(() => {
            console.log("MongoDB connection established.");
        })
        .catch((err) => {
            console.error("Mongoose error: ", err);
        });
})();


// blabla