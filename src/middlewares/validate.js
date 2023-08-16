const Joi = require("joi");

const validate = (schema) => (req, res, next) => {
    const { value, error } = Joi.compile(validSchema)
        .prefs({ errors: { label: "key" }, abortEarly: false })
        .validate(object);

    if (error) {
        const errorMessage = error.details
            .map((details) => details.message)
            .join(", ");
        return next(new Error(errorMessage));
    }
    Object.assign(req, value);
    return next();
};

module.exports = validate;