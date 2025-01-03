const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");
const { empty } = require("@hapi/joi/lib/base");
const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const baptismSchema = new Schema(
  {
    sacrament: {
      type: String,
      enum: ["Baptism", "Matrimony"],
      required: [true, "Set name for baptism is required"],
    },
    certificate: {
      type: Boolean,
      default: false,
    },
    eucharist: {
      type: Boolean,
      default: false,
    },

    chrismation: {
      type: Boolean,
      default: false,
    },
    baptism: {
      type: Boolean,
      default: false,
    },
    dateSacramentPerformed: {
      type: Date,
      required: [true, "Date that sacrament performed is required"],
    },
    neophyte: {
      email: {
        type: String,
        required: [true, "Email is required"],
      },
      phone: {
        type: String,
        required: true,
      },
      firstName: {
        type: String,
        required: [true, "Child's first name for baptism is required"],
      },

      lastName: {
        type: String,
        required: [true, "Child's last name for baptism is required"],
      },
      middleName: {
        type: String,
        required: false,
      },
      dob: {
        type: Date,
        required: [true, "Child's DOB is required"],
      },
      cityOfBirth: {
        type: String,
        required: [true, "City where person was born is required"],
      },
      stateOfBirth: {
        type: String,
        required: [true, "State where person was born is required"],
      },
      street: {
        type: String,
        required: [true, "State where person lives is required"],
      },
      city: {
        type: String,
        required: [true, "City where person lives is required"],
      },
      state: {
        type: String,
        required: [true, "State where person lives is required"],
      },
      zip: {
        type: String,
        required: [true, "State where person lives is required"],
      },
    },
    mother: {
      maidenName: {
        type: String,
        required: [true, "Child's mother's maiden name is required"],
      },
      firstName: {
        type: String,
        required: [true, "Child's mother's first name is required"],
      },
      phone: {
        type: String,
        required: false,
      },
    },
    father: {
      lastName: {
        type: String,
        required: [true, "Child's father's last name is required"],
      },
      firstName: {
        type: String,
        required: [true, "Child's father's first name is required"],
      },
      phone: {
        type: String,
        required: false,
      },
    },
    godParent_1: {
      lastName: {
        type: String,
        required: [true, "Child's god-parent's last name is required"],
      },
      firstName: {
        type: String,
        required: [true, "Child's god-parent's first name is required"],
      },
      phone: {
        type: String,
        required: false,
      },
    },
    godParent_2: {
      lastName: {
        type: String,
        required: false,
      },
      firstName: {
        type: String,
        required: false,
      },
      phone: {
        type: String,
        required: false,
      },
    },
    godParent_3: {
      lastName: {
        type: String,
        required: false,
      },
      firstName: {
        type: String,
        required: false,
      },
      phone: {
        type: String,
        required: false,
      },
    },
    godParent_4: {
      lastName: {
        type: String,
        required: false,
      },
      firstName: {
        type: String,
        required: false,
      },
      phone: {
        type: String,
        required: false,
      },
    },
    priest: {
      lastName: {
        type: String,
        required: [
          true,
          "Last Name of the priest that performed Holy Sacrament is required",
        ],
      },
      firstName: {
        type: String,
        required: [
          true,
          "First Name of the priest that performed Holy Sacrament is required",
        ],
      },
      phone: {
        type: String,
        required: false,
      },
    },
    notes: {
      type: String,
    },
    parishOwner: {
      type: Schema.Types.ObjectId,
      //would need delete defaul option after UI user is implemented
      default: "670061dbdbc4ca411b1325e4",
      ref: "parish",
      required: true,
    },
    userOwner: {
      type: Schema.Types.ObjectId,
      //would need delete defaul option after UI user is implemented
      default: "67007c81bd86684890db094a",
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

baptismSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  sacrament: Joi.string().required().messages({
    "any.required": `missing required sacrament field`,
  }),
  eucharist: Joi.boolean(),
  chrismation: Joi.boolean(),
  baptism: Joi.boolean(),
  dateSacramentPerformed: Joi.string().required().messages({
    "any.required": `missing required dateSacramentPerformed field`,
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
    middleName: Joi.string()
      .optional()
      .messages({
        "any.optional": `missing required neophyte.middleName field`,
      })
      .allow(null || ""),
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
    phone: Joi.string()
      .optional()
      .messages({
        "any.required": `mother.phone is optional field`,
      })
      .allow(null || ""),
  }),
  father: Joi.object({
    lastName: Joi.string().required().messages({
      "any.required": `missing required father.lastName field`,
    }),
    firstName: Joi.string().required().messages({
      "any.required": `missing required father.firstName field`,
    }),
    phone: Joi.string()
      .optional()
      .messages({
        "any.required": `father.phone is optional field`,
      })
      .allow(null || ""),
  }),
  godParent_1: Joi.object({
    lastName: Joi.string().required().messages({
      "any.required": `missing required godParent_1.lastName field`,
    }),
    firstName: Joi.string().required().messages({
      "any.required": `missing required godParent_1.firsttName field`,
    }),
    phone: Joi.string()
      .optional()
      .messages({
        "any.required": `father.phone is optional field`,
      })
      .allow(null || ""),
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
  }).allow(null || ""),
  godParent_3: Joi.object({
    lastName: Joi.string()
      .required()
      .messages({
        "any.required": `missing required godParent_3.lastName field`,
      })
      .allow(null || ""),
    firstName: Joi.string()
      .required()
      .messages({
        "any.required": `missing required godParent_3.firsttName field`,
      })
      .allow(null || ""),
    phone: Joi.string().optional().messages({
      "any.required": `father.phone is optional field`,
    }),
  }).allow(null || ""),
  godParent_4: Joi.object({
    lastName: Joi.string()
      .optional()
      .messages({
        "any.required": `missing required godParent_4.lastName field`,
      })
      .allow(null || ""),
    firstName: Joi.string()
      .optional()
      .messages({
        "any.required": `missing required godParent_4.firsttName field`,
      })
      .allow(null || ""),
    phone: Joi.string().optional().messages({
      "any.required": `father.phone is optional field`,
    }),
  }).allow(null || ""),
  priest: Joi.object({
    lastName: Joi.string().required().messages({
      "any.required": `missing required priest.lastName field`,
    }),
    firstName: Joi.string().required().messages({
      "any.required": `missing required priest.firstName field`,
    }),
    phone: Joi.string()
      .optional()
      .messages({
        "any.required": `priest.phone is optional field`,
      })
      .allow(null || ""),
  }),
  notes: Joi.string()
    .optional()
    .messages({
      "any.required": `notes is optional field`,
    })
    .allow(null || ""),
  certificate: Joi.boolean(),
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
  chrismation: Joi.boolean().required().messages({
    "any.required": `missing field chrismation`,
  }),
});
const updateEucharistSchema = Joi.object({
  eucharist: Joi.boolean().required().messages({
    "any.required": `missing field eucharist`,
  }),
});
const updateBaptismSchema = Joi.object({
  baptism: Joi.boolean().required().messages({
    "any.required": `missing field baptism`,
  }),
});

const schemas = {
  addSchema,
  updateCertificateSchema,
  updateChrismationSchema,
  updateEucharistSchema,
  updateBaptismSchema,
};

const Baptism = model("baptism", baptismSchema);

module.exports = {
  Baptism,
  schemas,
};
