const Ajv = require("ajv");
const { error } = require("ajv/dist/vocabularies/applicator/dependencies");
const ajv = new Ajv({ allErrors: true });
require("ajv-errors")(ajv);
require("ajv-formats")(ajv);

class userValidation {
  async createUser(req, res, next) {
    const schema = {
      type: "object",
      properties: {
        name: { type: "string", minLength: 3, maxLength: 32 },
        birthdate: { type: "string", format: "date" },
        email: { type: "string", format: "email" },
      },
      required: ["name", "birthdate", "email"],
      additionalProperties: false,
      errorMessage: {
        type: "should be an object",
        required: {
          name: "name is required",
          birthdate: "birthdate is required",
          email: "email is required",
        },
      },
    };
    const validate = ajv.compile(schema);
    const valid = validate(req.body);
    const errorMassage = !valid && validate.errors[0].message;

    if (!valid) {return res.status(400).json({ error: errorMassage });}
    next();
  }
}

module.exports = new userValidation();
