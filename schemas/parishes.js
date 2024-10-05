const Joi = require("joi");

const addSchema = Joi.object({
  parishName: Joi.string().required().messages({
    "any.required": `missing required parishName field`,
  }),
  email: Joi.string().pattern(emailRegexp).required().empty().messages({
    "string.empty": `EMAIL cannot be an empty field`,
    "any.required": `missing required email field`,
  }),
  phone: Joi.string().required().messages({
    "any.required": `missing required phone field`,
  }),
  eparchy: Joi.string().required().messages({
    "any.required": `missing required eparchy field`,
  }),
  address: Joi.object({
    street: Joi.string().required().messages({
      "any.required": `missing required address.street field`,
    }),
    city: Joi.string().required().messages({
      "any.required": `missing required address.city field`,
    }),
    state: Joi.string().required().messages({
      "any.required": `missing required address.state field`,
    }),
    zip: Joi.string().required().messages({
      "any.required": `missing required address.zip field`,
    }),
  }),
});

module.exports = {
  addSchema,
};
