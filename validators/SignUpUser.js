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

export const signUpSchema = joi.object({
    firstName: joi.string().required().min(2).max(20).messages({
        "any.required": "The first name field is required.",
        "string.base": "Must be a string.",
        "string.min": "Must be at least 2 characters long.",
        "string.max": "Must be a maximum of 20 characters long."
    }),
    lastName: joi.string().required().min(2).max(20).messages({
        "any.required": "The last name field is required.",
        "string.base": "Must be a string.",
        "string.min": "Must be at least 2 characters long.",
        "string.max": "Must be a maximum of 20 characters long."
    }),
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
    }),
    photo: joi.string().uri().messages({
        "string.base": "Must be a string.",
        "string.uri": "Must be a valid URL."
    }),
    country: joi.string().required().messages({
        "any.required": "The country field is required.",
        "string.base": "Must be a string."
    }),
    age: joi.number().required().min(18).max(70).messages({
        "any.required": "The age field is required.",
        "number.base": "Must be a number.",
        "number.max": "Must be less than 71.",
        "number.min": "Must be over 17."
    }),
    phone: joi.number().messages({
        "number.base": "Must be a number."
    })
});