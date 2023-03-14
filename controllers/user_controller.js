const mongoose = require('mongoose');
const User = require('../models/User');


module.exports.signUp = async (req, res) => {
    let user;
    try {
        user = await User.findOne({ email: req.body.email });
    } catch (e) {
        return res.status(400).json({ errorMsg: "Some Error at the database Occured", e });
    }


    if (user) {
        return res.status(400).json({ error: "Sorry, user Already Exisits with the email" });
    }

    try {
        user = new User(req.body);
        await user.save();
        res.status(200).json(user);
    } catch (e) {
        res.status(500).json({ error: e })
    }
}

module.exports.loginUser = (req, res) => {

}

module.exports.getUser = (req, res) => {

}

module.exports.logoutUser = (req, res) => {

}

module.exports.getAllUsers = (req, res) => {

}