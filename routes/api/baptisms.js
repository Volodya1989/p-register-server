const express = require("express");

const ctrl = require("../../controllers/baptisms");
const { validateBody, isValidId, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/baptism");

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
router.patch(
  "/:id/certificate",
  authenticate,
  isValidId,
  validateBody(schemas.updateCertificateSchema),
  ctrl.updateCertificate
);
router.patch(
  "/:id/eucharist",
  authenticate,
  isValidId,
  validateBody(schemas.updateEucharistSchema),
  ctrl.updateEucharist
);
router.patch(
  "/:id/chrismation",
  authenticate,
  isValidId,
  validateBody(schemas.updateChrismationSchema),
  ctrl.updateChrismation
);
router.patch(
  "/:id/baptism",
  authenticate,
  isValidId,
  validateBody(schemas.updateBaptismSchema),
  ctrl.updateChrismation
);

router.delete("/:id", authenticate, isValidId, ctrl.deleteById);

module.exports = router;
