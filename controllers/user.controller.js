const User = require('../models/user.model');
const mongoose = require('mongoose');


const getUser = async (req, res) => {
    try {
        const user = await User.find( { _id: req.params.id } );
        res.status(200).json(user);
    } catch(err) {
        console.error("Error trying to get User: ", err)
        res.status(500).json(err);
    }
}


const getAllUses = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch(err) {
        console.error("Error trying to get User: ", err)
        res.status(500).json(err);
    }
}


const postUser = async (req, res) => {
    const users = await User.find();
    let lastId = 0;
    if (Array.isArray(users)) {
        for(let data of users) {
            lastId = 1 + Math.max(lastId, data._id);
        }
    }

    const user = new User();
    user._id = lastId;
    user.name = req.body.name;
    user.age = req.body.age;
    await user.save();

    res.status(200).json({status: req.body});
 }


module.exports = {
    getAllUses,
    getUser,
    postUser
};
