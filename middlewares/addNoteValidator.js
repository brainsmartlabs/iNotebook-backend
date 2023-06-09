const { body, validationResult } = require('express-validator');

const addNoteValidationRules = () => {
    return [
        body('title', 'Title should be minimum 5 charecters').isLength({ min: 5 }),
        body('description', 'Description should be atleast 9 charecters').isLength({ min: 9 }),
    ]
}

const addNoteValidate = (req, res, next) => {
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

module.exports = { addNoteValidationRules, addNoteValidate }