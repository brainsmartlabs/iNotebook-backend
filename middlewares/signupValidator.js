const { body, validationResult } = require('express-validator');

const signUpValidationRules = () => {
    return [
        body('name', 'Enter a Valid Name').isLength({ min: 5 }),
        body('email', 'Enter a Valid Email').isEmail(),
        body('password', 'Password Must be atleast 6 charecters').isLength({ min: 6 })
    ]
}

const signUpValidate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next();
    }
    else {
        const extractedErrors = []
        errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
        return res.status(422).json({
            errors: extractedErrors,
        })
    }
}
module.exports = { signUpValidationRules, signUpValidate }