const User = require('../models/user.model');
const mongoose = require('mongoose');


const getUser = async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user);
    } catch(err) {
        console.error("Error trying to get User: ", err)
        res.status(500).json(err);
    }
}


const putUser = async (req, res) => {
   const user = new User();
   
   user._id = 1;
   user.name = "Squidward Tentacles";
   user.age = 40;

   await user.save();
}


module.exports = {
    getUser,
    putUser
};
