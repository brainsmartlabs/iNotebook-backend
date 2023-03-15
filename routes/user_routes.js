const express = require('express');
const userRouter = express.Router();
const { signUpValidationRules, signUpValidate } = require('../middlewares/signUpValidator.js');
const { loginValidationRules, loginValidate } = require('../middlewares/loginValidator.js');
const tokenValidator = require('../middlewares/jwtValidator.js');
const { getAllUsers, signUp, loginUser, getUser, logoutUser } = require('../controllers/user_controller.js');


userRouter.get('/', getAllUsers);
userRouter.post('/signup', signUpValidationRules(), signUpValidate, signUp);
userRouter.post('/login', loginValidationRules(), loginValidate, loginUser);
userRouter.get('/user', tokenValidator, getUser);
userRouter.get("/logout", logoutUser);

module.exports = userRouter;