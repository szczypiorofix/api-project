import dotenv from "dotenv";
import CoreApp from "./core/core";

dotenv.config();

const PORT = process.env.SERVER_PORT ?? 3000;
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
