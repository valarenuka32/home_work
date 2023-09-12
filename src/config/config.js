const joi = require("joi");
const dotenv = require("dotenv");

dotenv.config();

const envVarsSchema = joi.object({
    PORT: joi.number().default(7000),
    MONGODB_URL: joi.string().trim().description("mongoodb url"),
    BASE_URL:joi.string().trim().description("BASE_URL"),
}).unknown();

const { value: envVars, error } = envVarsSchema
    .prefs({ errors: { label: "key" } })
    .validate(process.env);

module.exports = {
    port: envVars.PORT,
    mongodb: {
        url: envVars.MONGODB_URL,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },
    base_url:envVars.BASE_URL,
};