import express, { Router } from "express";
import bodyParser from "body-parser";
import jsonContentType from "../middlewares/json";
import { getAllUses, getUser, postUser } from "../controllers/user.controller";

const router: Router = express.Router();

router.use( jsonContentType );

router.get("/", getAllUses);
router.get("/:id", getUser);
router.post("/", bodyParser.urlencoded({ extended: true }), postUser);

export default router;
