const Joi = require("joi");
const dotenv = require("dotenv");

dotenv.config();

const envVarsSchema = Joi.object({
    PORT: Joi.number().default(8080),
    MONGODB_URL: Joi.string().trim().description("mongodb url"),
}).unknown();

const { value: envVars, error } = envVarsSchema
    .prefs({ errors: { label: "key" } })
    .validate(process.env);

// if(error){
//     console.log("config error:",error);
// }

module.exports = {
    port: envVars.PORT,
    mongodb: {
        url: envVars.MONGODB_URL,
        options: {
            useNewUrlparser: true,
            useUnifiedTopology: true,
        },
    },
};