const { Baptism } = require("../models/baptism");

const { HttpError, ctrlWrapper } = require("../helpers");

const listBaptisms = async (req, res) => {
  const { _id: owner, parish: parishOwner } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  const listBaptisms = await Baptism.find(
    { parishOwner },
    "-createdAt -updatedAt",
    {
      skip,
      limit,
    }
  ).populate("parishOwner", "email");
  res.json({ total: listBaptisms.length, listBaptisms });
};

const getById = async (req, res) => {
  const { id } = req.params;
  const singleBaptism = await Baptism.findById(id);
  if (!singleBaptism) {
    throw HttpError(404, "Not found");
  }
  res.json(singleBaptism);
};

const addBaptism = async (req, res) => {
  const { _id: userOwner, parish: parishOwner, userStatus } = req.user;
  if (userStatus === "admin") {
    throw HttpError(
      400,
      "Admin users are not authorized to create Sacramental records, but only new parishes and users."
    );
  }
  const addedBaptism = await Baptism.create({
    ...req.body,
    parishOwner,
    userOwner,
  });
  res.status(201).json(addedBaptism);
};

const updateBaptism = async (req, res) => {
  const { id } = req.params;
  const updatedBaptism = await Baptism.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedBaptism) {
    throw HttpError(404, "Not found");
  }
  res.json(updatedBaptism);
};

const updateCertificate = async (req, res) => {
  const { id } = req.params;
  const result = await Baptism.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const updateEucharist = async (req, res) => {
  const { id } = req.params;
  const result = await Baptism.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};
const updateChrismation = async (req, res) => {
  const { id } = req.params;
  const result = await Baptism.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const removeBaptism = async (req, res) => {
  const { id } = req.params;
  const removedBaptism = await Baptism.findByIdAndRemove(id);
  if (!removedBaptism) {
    throw HttpError(404, "Not found");
  }
  res.json({
    message: "Baptism deleted",
  });
};

module.exports = {
  getAll: ctrlWrapper(listBaptisms),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(addBaptism),
  updateById: ctrlWrapper(updateBaptism),
  updateCertificate: ctrlWrapper(updateCertificate),
  updateEucharist: ctrlWrapper(updateEucharist),
  updateChrismation: ctrlWrapper(updateChrismation),
  deleteById: ctrlWrapper(removeBaptism),
};
