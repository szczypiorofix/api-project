import express, {Express, Request, Response} from "express";
import mongoose from "mongoose";
import userRouter from "../routes/user";
import logger from "../middlewares/logger";

export interface ICoreApp {
    app: Express;
    init: () => void;
    mongoDbConnect: (url: string) => Promise<typeof mongoose | undefined>;
}

const CoreApp = (): ICoreApp => {
    return {
        app: express(),
        init() {
            this.app = express();
            this.app.use(logger);
            this.app.use(express.json());

            this.app.set("view engine", "ejs");

            this.app.get("/", (req: Request, res: Response) => {
                res.render("../src/views/index");
            });
            this.app.get("/about", (req: Request, res: Response) => {
                res.render("../src/views/about");
            });
            this.app.get("/routes", (req: Request, res: Response) => {
                res.render("../src/views/routes");
            });
            this.app.get("/examples", (req: Request, res: Response) => {
                res.render("../src/views/examples");
            });

            this.app.use("/user", userRouter);

            this.app.get('*', (req, res) => {
                res.status(404).send();
            });
        },
        async mongoDbConnect(url: string) {
            let md;
            try {
                md = await mongoose.connect(url);
            } catch (err) {
                console.error(err);
            }
            return md;
        },
    };
};

export default CoreApp;
