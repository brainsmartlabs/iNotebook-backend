const dotenv = require('dotenv');
const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

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
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        await user.save();
        const authToken = jwt.sign({ "userID": user._id }, JWT_SECRET);
        res.status(200).json({ authToken });
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