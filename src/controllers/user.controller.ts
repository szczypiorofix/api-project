import { Request, Response } from "express";
import { User } from "../models/user.model";

const getUser = async (req: Request, res: Response) => {
    try {
        const user = await User.find({ _id: req.params.id });
        res.status(200).json(user);
    } catch (err) {
        console.log("Error: trying to get User: ", err);
        res.status(500).json(err);
    }
};

const getAllUses = async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        console.log("Error: trying to get User: ", err);
        res.status(500).json(err);
    }
};

const postUser = async (req: Request, res: Response) => {
    const users = await User.find();
    let lastId = 0;
    if (Array.isArray(users)) {
        for (const data of users) {
            lastId = 1 + Math.max(lastId, data._id);
        }
    }

    const user = new User();
    user._id = lastId;
    user.name = req.body.name;
    user.age = req.body.age;
    await user.save();

    res.status(200).json({ status: req.body });
};

export { getAllUses, getUser, postUser };
