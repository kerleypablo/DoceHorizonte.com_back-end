"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const fildsError = 'All fields must be filled';
const loginSchema = Joi.object({
    email: Joi
        .string()
        .email()
        .required()
        .messages({
        'string.email': 'Invalid email',
        'any.required': fildsError,
        'string.empty': fildsError,
    }),
    password: Joi
        .string()
        .min(6)
        .required()
        .empty()
        .messages({
        'any.required': fildsError,
        'string.min': 'Password must be at least 6 characters long',
        'string.empty': fildsError,
    }),
});
exports.default = loginSchema;
//# sourceMappingURL=LoginValidateSchema.js.map