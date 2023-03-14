const mongoose = require('mongoose');
const User = require('../models/User');

module.exports.getAllUsers = (req, res) => {

}

module.exports.signUp = async (req, res) => {
    console.log(req.body);
    //let {name, email, password} = req.body;
    let user = new User(req.body);
    await user.save();
    res.json(user);
}

module.exports.loginUser = (req, res) => {

}

module.exports.getUser = (req, res) => {

}

module.exports.logoutUser = (req, res) => {

}