const joi = require("joi");
const dotenv = require("dotenv");

dotenv.config();

const envVarsSchema = joi.object({
    PORT: joi.number().default(7000),
    MONGODB_URL: joi.string().trim().description("mongoodb url"),
    JWT_SECRET_KEY: joi.string()
        .description("Jwt sectreat key")
        .default("thisisJwtsecreat_key"),
}).unknown();

const { value: envVars, error } = envVarsSchema
    .prefs({ errors: { label: "key" } })
    .validate(process.env);

if (error) {
    console.log("Config Error: ", error);
}

module.exports = {
    port: envVars.PORT,
    mongodb: {
        url: envVars.MONGODB_URL,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },
    jwt:{
        secret_key:envVars.JWT_SECRET_KEY,
    },
};