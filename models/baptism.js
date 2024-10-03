const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");
const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const baptismSchema = new Schema(
  {
    sacrament: {
      type: String,
      enum: ["Baptism", "Matrimony"],
      required: [true, "Set name for baptism is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    childFirstName: {
      type: String,
      required: [true, "Child's first name for baptism is required"],
    },
    childLastName: {
      type: String,
      required: [true, "Child's last name for baptism is required"],
    },
    childMiddleName: {
      type: String,
      required: false,
    },
    dateOfBirth: {
      type: Date,
      required: [true, "Child's DOB is required"],
    },
    cityOfBirth: {
      type: String,
      required: [true, "City where person was born  is required"],
    },
    stateOfBirth: {
      type: String,
      required: [true, "State where person was born  is required"],
    },
    dateSacramentPerformed: {
      type: Date,
      required: [true, "Date that sacrament performed is required"],
    },
    motherMaidenName: {
      type: String,
      required: [true, "Child's mother's maiden name is required"],
    },
    motherFirstName: {
      type: String,
      required: [true, "Child's mother's first name is required"],
    },
    fatherLastName: {
      type: String,
      required: [true, "Child's father's last name is required"],
    },
    fatherFirstName: {
      type: String,
      required: [true, "Child's fathers's first name is required"],
    },
    godParentFirstLastName: {
      type: String,
      required: [true, "Child's god-parent's last name is required"],
    },
    godParentFirstFirstName: {
      type: String,
      required: [true, "Child's god-parent's first name is required"],
    },
    godParentSecondLastName: {
      type: String,
      required: false,
    },
    godParentSecondFirstName: {
      type: String,
      required: false,
    },
    priestFirstName: {
      type: String,
      required: [
        true,
        "First Name of the priest that performed Holy Sacrament is required",
      ],
    },
    priestLastName: {
      type: String,
      required: [
        true,
        "Last Name of the priest that performed Holy Sacrament is required",
      ],
    },
    notes: {
      type: String,
    },

    phone: {
      type: String,
      required: true,
    },
    certificate: {
      type: Boolean,
      default: false,
    },
    chrismation: {
      type: Boolean,
      default: false,
    },
    eucharist: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

baptismSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().empty().messages({
    "string.empty": `EMAIL cannot be an empty field`,
    "any.required": `missing required EMAIL field`,
  }),
  phone: Joi.string().required().messages({
    "any.required": `missing required phone field`,
  }),
  sacrament: Joi.string().required().messages({
    "any.required": `missing required sacrament field`,
  }),
  childFirstName: Joi.string().required().messages({
    "any.required": `missing required childFirstName field`,
  }),
  childLastName: Joi.string().required().messages({
    "any.required": `missing required childLastName field`,
  }),
  childMiddleName: Joi.string().optional().messages({
    "any.optional": `missing required childLastName field`,
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
  godParentSecondFirstName: Joi.string().optional().messages({
    "any.required": `missing required godParentFirstFirstName field`,
  }),
  godParentSecondLastName: Joi.string().optional().messages({
    "any.required": `missing required godParentFirstLastName field`,
  }),
  priestFirstName: Joi.string().required().messages({
    "any.required": `missing required priestFirstName field`,
  }),
  priestLastName: Joi.string().required().messages({
    "any.required": `missing required priestFirstName field`,
  }),
  certificate: Joi.boolean(),
  chrismation: Joi.boolean(),
  eucharist: Joi.boolean(),
});

module.exports = {
  addSchema,
};

const updateCertificateSchema = Joi.object({
  certificate: Joi.boolean().required().messages({
    "any.required": `missing field certificate`,
  }),
});
const updateChrismationSchema = Joi.object({
  christmation: Joi.boolean().required().messages({
    "any.required": `missing field christmation`,
  }),
});
const updateEucharistSchema = Joi.object({
  eucharist: Joi.boolean().required().messages({
    "any.required": `missing field eucharist`,
  }),
});

const schemas = {
  addSchema,
  updateCertificateSchema,
  updateChrismationSchema,
  updateEucharistSchema,
};

const Baptism = model("baptism", baptismSchema);

module.exports = {
  Baptism,
  schemas,
};
