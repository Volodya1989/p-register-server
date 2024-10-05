const { Parish } = require("../models/parish");

const { HttpError, ctrlWrapper } = require("../helpers");

const listParishes = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  const listParishes = await Parish.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("owner", "email");
  res.json(listParishes);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const singleParish = await Parish.findById(id);
  if (!singleParish) {
    throw HttpError(404, "Not found");
  }
  res.json(singleParish);
};

const addParish = async (req, res) => {
  const { _id: owner, userStatus } = req.user;
  if (userStatus !== "admin") {
    throw HttpError(
      400,
      "Regular users are not authorized to add new parishes, but only new Sacramental records and regular users."
    );
  }
  const addedParish = await Parish.create({ ...req.body, owner });
  res.status(201).json(addedParish);
};

const updateParish = async (req, res) => {
  const { id } = req.params;
  const updatedParish = await Parish.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedParish) {
    throw HttpError(404, "Not found");
  }
  res.json(updatedParish);
};

const updateFavorite = async (req, res) => {
  const { id } = req.params;
  const result = await Parish.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const removeParish = async (req, res) => {
  const { id } = req.params;
  const removedParish = await Parish.findByIdAndRemove(id);
  if (!removedParish) {
    throw HttpError(404, "Not found");
  }
  res.json({
    message: "Parish deleted",
  });
};

module.exports = {
  getAll: ctrlWrapper(listParishes),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(addParish),
  updateById: ctrlWrapper(updateParish),
  updateFavorite: ctrlWrapper(updateFavorite),
  deleteById: ctrlWrapper(removeParish),
};
