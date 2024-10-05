const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");
const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const parishSchema = new Schema(
  {
    parishName: {
      type: String,
      required: [true, "Set name for parish"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, "Set phone for parish"],
    },
    eparchy: {
      type: String,
      required: [true, "Set eparchy for parish"],
    },
    address: {
      street: {
        type: String,
        required: [true, "Street where parish is located required"],
      },
      city: {
        type: String,
        required: [true, "City where parish is located required"],
      },
      state: {
        type: String,
        required: [true, "State where parish is located required"],
      },
      zip: {
        type: String,
        required: [true, "State where parish is located required"],
      },
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

parishSchema.post("save", handleMongooseError);

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

const schemas = {
  addSchema,
};

const Parish = model("parish", parishSchema);

module.exports = {
  Parish,
  schemas,
};
