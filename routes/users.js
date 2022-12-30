const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/", ctrl.users.getUsers);
router.get("/username/:username", ctrl.users.getUserByUsername);
router.get("/:userId", ctrl.users.getUser);
router.put("/:userId", ctrl.users.putUser);
router.delete("/:userId", ctrl.users.deleteUser);

module.exports = router;
