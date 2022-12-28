const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/", ctrl.auth.login);
router.post("/", ctrl.auth.signup);

module.exports = router;
