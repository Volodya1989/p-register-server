const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `missing required name field`,
  }),
  email: Joi.string().required().messages({
    "any.required": `missing required email field`,
  }),
  phone: Joi.string().required().messages({
    "any.required": `missing required phone field`,
  }),
  sacrament: Joi.string().required().messages({
    "any.required": `missing required sacrament field`,
  }),
  childsFirstName: Joi.string().required().messages({
    "any.required": `missing required childsFirstName field`,
  }),
  childsLastName: Joi.string().required().messages({
    "any.required": `missing required childsLastName field`,
  }),
  dateOfBirth: Joi.string().required().messages({
    "any.required": `missing required dateOfBirth field`,
  }),
  cityOfBirth: Joi.string().required().messages({
    "any.required": `missing required cityOfBirth field`,
  }),
  stateOfBirth: Joi.string().required().messages({
    "any.required": `missing required stateOfBirth field`,
  }),
  dateSacramentPerformed: Joi.string().required().messages({
    "any.required": `missing required dateSacramentPerformed field`,
  }),
  motherMaidenName: Joi.string().required().messages({
    "any.required": `missing required motherMaidenName field`,
  }),
  motherFirstName: Joi.string().required().messages({
    "any.required": `missing required motherFirstName field`,
  }),
  fatherLastName: Joi.string().required().messages({
    "any.required": `missing required fatherLastName field`,
  }),
  fatherFirstName: Joi.string().required().messages({
    "any.required": `missing required fatherFirstName field`,
  }),
  godParentFirstFirstName: Joi.string().required().messages({
    "any.required": `missing required godParentFirstFirstName field`,
  }),
  godParentFirstLastName: Joi.string().required().messages({
    "any.required": `missing required godParentFirstLastName field`,
  }),
  priestFirstName: Joi.string().required().messages({
    "any.required": `missing required priestFirstName field`,
  }),
  priestLastName: Joi.string().required().messages({
    "any.required": `missing required priestFirstName field`,
  }),
  certificate: Joi.boolean(),
  eucharist: Joi.boolean(),
  chrismation: Joi.boolean(),
});

module.exports = {
  addSchema,
};
