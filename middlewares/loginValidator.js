const { body, validationResult } = require('express-validator');

const loginValidationRules = () => {
    return [
        body('email', 'Enter a Valid Email').isEmail(),
        body('password', 'Password Cannot be Blank').exists(),
    ]
}

const loginValidate = (req, res, next) => {
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

module.exports = { loginValidationRules, loginValidate }