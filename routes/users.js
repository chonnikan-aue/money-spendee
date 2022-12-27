const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/", ctrl.users.login);
router.get("/all", ctrl.users.getUsers);
router.get("/:id", ctrl.users.getUser);
router.post("/", ctrl.users.signup);
router.put("/:id", ctrl.users.putUser);
router.delete("/:id", ctrl.users.deleteUser);

module.exports = router;
