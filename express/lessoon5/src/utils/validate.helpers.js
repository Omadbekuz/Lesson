const Ajv = require("ajv");
const { error } = require("ajv/dist/vocabularies/applicator/dependencies");
const ajv = new Ajv({ allErrors: true });
require("ajv-errors")(ajv);
require("ajv-formats")(ajv);

const validate = (schema, data) => {
  const validate = ajv.compile(schema);
  const valid = validate(req.body);
  if (valid) return null;
  return !valid && validate.errors[0].message;
};
