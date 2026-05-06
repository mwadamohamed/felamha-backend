const express = require("express");
const router = express.Router();
const placeController = require("../controllers/placeController");

// ================== PUBLIC ROUTES ==================
router.get("/", placeController.getAllPlaces);
router.get("/:id", placeController.getSinglePlace);

// ================== ADMIN ROUTES ==================
// هنضيف adminMiddleware هنا لما فبرونيا تخلص
// مثال: router.post("/", adminMiddleware, placeController.addPlace);
router.post("/", placeController.addPlace);
router.put("/:id", placeController.editPlace);
router.delete("/:id", placeController.deletePlace);

module.exports = router;
