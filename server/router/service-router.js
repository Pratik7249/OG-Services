const express = require("express");
const servicesController = require("../controllers/service-controller"); // Import the controller
const router = express.Router();

// Use the correct methods from the controller
router.route("/service").get(servicesController.services);
router.route("/service/:id").get(servicesController.getServiceById);

module.exports = router;
