const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const baptismSchema = new Schema(
  {
    sacrament: {
      type: String,
      required: [true, "Set name for baptism is required"],
    },
    email: {
      type: String,
      required: true,
    },
    childsFirstName: {
      type: String,
      required: [true, "Child's first name for baptism is required"],
    },
    childsLastName: {
      type: String,
      required: [true, "Child's last name for baptism is required"],
    },
    childsMiddleName: {
      type: String,
    },
    dateOfBirth: {
      type: String,
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
      type: String,
      required: [true, "Date that sacrament performed is required"],
    },
    motherMaidenName: {
      type: String,
      required: [true, "Child's mother's maiden name is required"],
    },
    otherFirstName: {
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
    godMotherLastName: {
      type: String,
      required: [true, "Child's god-mother's last name is required"],
    },
    godMotherFirstName: {
      type: String,
      required: [true, "Child's god-mother's first name is required"],
    },
    godFatherLastName: {
      type: String,
      required: [true, "Child's god-father's last name is required"],
    },
    godFatherFirstName: {
      type: String,
      required: [true, "Child's god-fathers's first name is required"],
    },
    priestPerformedSacrament: {
      type: String,
      required: [
        true,
        "Name of the priest that performed Holy Sacrament is required",
      ],
    },
    notes: {
      type: String,
    },

    phone: {
      type: String,
      required: true,
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
  godMotherLastName: Joi.string().required().messages({
    "any.required": `missing required godMotherLastName field`,
  }),
  godFatherLastName: Joi.string().required().messages({
    "any.required": `missing required godFatherLastName field`,
  }),
  godFatherFirstName: Joi.string().required().messages({
    "any.required": `missing required godFatherFirstName field`,
  }),
  priestPerformedSacrament: Joi.string().required().messages({
    "any.required": `missing required priestPerformedSacrament field`,
  }),
  favorite: Joi.boolean(),
});

module.exports = {
  addSchema,
};

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required().messages({
    "any.required": `missing field favorite`,
  }),
});

const schemas = {
  addSchema,
  updateFavoriteSchema,
};

const Baptism = model("baptism", baptismSchema);

module.exports = {
  Baptism,
  schemas,
};
