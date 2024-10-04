const { Schema, model } = require("mongoose");
const Joi = require("@hapi/joi");

const { handleMongooseError } = require("../helpers");

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is required"],
      unique: false,
    },
    lastName: {
      type: String,
      required: [true, "Last Name is required"],
      unique: false,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    userStatus: {
      type: String,
      enum: ["admin", "clergy", "viewOnly"],
      default: "clergy",
    },
    token: {
      type: String,
      default: null,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
    parish: {
      type: Schema.Types.ObjectId,
      ref: "parish",
      required: function () {
        return this.userStatus !== "admin";
      },
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
  firstName: Joi.string().max(15).min(3).required().empty().messages({
    "string.empty": `First Name cannot be an empty field`,
    "string.max": `First Name should have a maximum length of {#limit}`,
    "string.min": `First Name should have a minimum length of {#limit}`,
    "any.required": `missing required First Name field`,
  }),
  lastName: Joi.string().max(15).min(3).required().empty().messages({
    "string.empty": `Last Name cannot be an empty field`,
    "string.max": `Last Name should have a maximum length of {#limit}`,
    "string.min": `Last Name should have a minimum length of {#limit}`,
    "any.required": `missing required Last Name field`,
  }),
  parish: Joi.string().max(30).optional().empty().messages({
    "string.empty": `Parish cannot be an empty field`,
  }),
  userStatus: Joi.string().max(30).optional().empty().messages({
    "string.empty": `userStatus cannot be an empty field`,
  }),
  email: Joi.string().pattern(emailRegexp).required().empty().messages({
    "string.empty": `EMAIL cannot be an empty field`,
    "any.required": `missing required EMAIL field`,
  }),

  password: Joi.string().min(6).required().empty().messages({
    "string.empty": `PASSWORD cannot be an empty field`,
    "string.min": `PASSWORD should have a minimum length of {#limit}`,
    "any.required": `missing required PASSWORD field`,
  }),
});

const emailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).empty().required().messages({
    "string.empty": `EMAIL cannot be an empty field`,
    "any.required": `missing required field EMAIL`,
  }),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().empty().messages({
    "string.empty": `EMAIL cannot be an empty field`,
    "any.required": `missing required EMAIL field`,
  }),
  password: Joi.string().required().empty().min(6).messages({
    "string.empty": `PASSWORD cannot be an empty field`,
    "string.min": `PASSWORD should have a minimum length of {#limit}`,
    "any.required": `missing required PASSWORD field`,
  }),
});

const schemas = {
  registerSchema,
  emailSchema,
  loginSchema,
};

const User = model("user", userSchema);

module.exports = {
  User,
  schemas,
};
