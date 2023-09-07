import joi from 'joi'
import joiPwd from 'joi-password-complexity'
const complexityOptions = {
    min: 6,
    max: 30,
    lowerCase: 1,
    upperCase: 1,
    numeric: 2,
    symbol: 1,
    requirementCount: 5
};

export const signInSchema = joi.object({
    mail: joi.string().required().email().messages({
        "any.required": "The email field is required.",
        "string.base": "Must be a string.",
        "string.email": "Must be a valid email."
    }),
    password: joiPwd(complexityOptions).required().messages({
        "any.required": "The password field is required.",
        "passwordComplexity.tooShort": "Must be at least 6 characters long.",
        "passwordComplexity.tooLong": "Must be a maximum of 30 characters long.",
        "passwordComplexity.lowercase": "Must contain at least 1 lowercase letter.",
        "passwordComplexity.uppercase": "Must contain at least 1 uppercase letter.",
        "passwordComplexity.numeric": "Must contain at least 2 number.",
        "passwordComplexity.symbol": "Must contain at least 1 symbol.",
        "passwordComplexity.requirementCount": "You must meet all complexity requirements."
    })
});