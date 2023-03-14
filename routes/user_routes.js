const express = require('express');
const userRouter = express.Router();

const { getAllUsers, signUp, loginUser, getUser, logoutUser } = require('../controllers/user_controller.js')

userRouter.get('/', getAllUsers);
userRouter.post('/signup', signUp);
userRouter.post('/login', loginUser);
userRouter.get('/user', getUser);
userRouter.get("/logout", logoutUser);

module.exports = userRouter;