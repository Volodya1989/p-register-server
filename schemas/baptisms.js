const Joi = require("joi");

const addSchema = Joi.object({
  sacrament: Joi.string().required().messages({
    "any.required": `missing required sacrament field`,
  }),
  sacramentsReceived: Joi.object({
    chrismation: Joi.boolean(),
    eucharist: Joi.boolean(),
    baptism: Joi.boolean(),
    dateSacramentPerformed: Joi.string().required().messages({
      "any.required": `missing required dateSacramentPerformed field`,
    }),
  }),
  neophyte: Joi.object({
    email: Joi.string().pattern(emailRegexp).required().empty().messages({
      "string.empty": `EMAIL cannot be an empty field`,
      "any.required": `missing required neophyte.email field`,
    }),
    phone: Joi.string().required().messages({
      "any.required": `missing required neophyte.phone field`,
    }),
    firstName: Joi.string().required().messages({
      "any.required": `missing required neophyte.firstName field`,
    }),
    lastName: Joi.string().required().messages({
      "any.required": `missing required neophyte.lastName field`,
    }),
    middleName: Joi.string().optional().messages({
      "any.optional": `missing required neophyte.middleName field`,
    }),
    dob: Joi.string().required().messages({
      "any.required": `missing required neophyte.dob field`,
    }),
    cityOfBirth: Joi.string().required().messages({
      "any.required": `missing required neophyte.cityOfBirth field`,
    }),
    stateOfBirth: Joi.string().required().messages({
      "any.required": `missing required neophyte.stateOfBirth field`,
    }),
    street: Joi.string().required().messages({
      "any.required": `missing required neophyte.street field`,
    }),
    city: Joi.string().required().messages({
      "any.required": `missing required neophyte.city field`,
    }),
    state: Joi.string().required().messages({
      "any.required": `missing required neophyte.state field`,
    }),
    zip: Joi.string().required().messages({
      "any.required": `missing required neophyte.zip field`,
    }),
  }),
  mother: Joi.object({
    maidenName: Joi.string().required().messages({
      "any.required": `missing required mother.maidenName field`,
    }),
    firstName: Joi.string().required().messages({
      "any.required": `missing required mother.firstName field`,
    }),
    phone: Joi.string().optional().messages({
      "any.required": `mother.phone is optional field`,
    }),
  }),
  father: Joi.object({
    lastName: Joi.string().required().messages({
      "any.required": `missing required father.lastName field`,
    }),
    firstName: Joi.string().required().messages({
      "any.required": `missing required father.firstName field`,
    }),
    phone: Joi.string().optional().messages({
      "any.required": `father.phone is optional field`,
    }),
  }),
  godParent_1: Joi.object({
    lastName: Joi.string().required().messages({
      "any.required": `missing required godParent_1.lastName field`,
    }),
    firstName: Joi.string().required().messages({
      "any.required": `missing required godParent_1.firsttName field`,
    }),
    phone: Joi.string().optional().messages({
      "any.required": `father.phone is optional field`,
    }),
  }),
  godParent_2: Joi.object({
    lastName: Joi.string().required().messages({
      "any.required": `missing required godParent_2.lastName field`,
    }),
    firstName: Joi.string().required().messages({
      "any.required": `missing required godParent_2.firsttName field`,
    }),
    phone: Joi.string().optional().messages({
      "any.required": `father.phone is optional field`,
    }),
  }).optional(),
  godParent_3: Joi.object({
    lastName: Joi.string().required().messages({
      "any.required": `missing required godParent_3.lastName field`,
    }),
    firstName: Joi.string().required().messages({
      "any.required": `missing required godParent_3.firsttName field`,
    }),
    phone: Joi.string().optional().messages({
      "any.required": `father.phone is optional field`,
    }),
  }).optional(),
  godParent_4: Joi.object({
    lastName: Joi.string().required().messages({
      "any.required": `missing required godParent_4.lastName field`,
    }),
    firstName: Joi.string().required().messages({
      "any.required": `missing required godParent_4.firsttName field`,
    }),
    phone: Joi.string().optional().messages({
      "any.required": `father.phone is optional field`,
    }),
  }).optional(),
  priest: Joi.object({
    lastName: Joi.string().required().messages({
      "any.required": `missing required priest.lastName field`,
    }),
    firstName: Joi.string().required().messages({
      "any.required": `missing required priest.firstName field`,
    }),
    phone: Joi.string().optional().messages({
      "any.required": `priest.phone is optional field`,
    }),
  }),
  notes: Joi.string().optional().messages({
    "any.required": `notes is optional field`,
  }),
  certificate: Joi.boolean(),
});

module.exports = {
  addSchema,
};
