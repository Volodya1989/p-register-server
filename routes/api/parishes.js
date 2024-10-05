const express = require("express");

const ctrl = require("../../controllers/parishes");
const { validateBody, isValidId, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/parish");

const router = express.Router();

router.get("/", authenticate, ctrl.getAll);

router.get("/:id", authenticate, isValidId, ctrl.getById);

router.post("/", authenticate, validateBody(schemas.addSchema), ctrl.add);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateById
);

router.delete("/:id", authenticate, isValidId, ctrl.deleteById);

module.exports = router;
