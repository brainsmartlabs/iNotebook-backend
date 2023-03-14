const { body, validationResult } = require('express-validator');

const signUpValidationRules = () => {
    return [
        body('name').isLength({ min: 5 }),
        body('email').isEmail(),
        body('password').isLength({ min: 6 })
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