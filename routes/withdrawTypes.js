const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/", ctrl.withdrawTypes.getWithdrawTypes);
router.get("/user/:userId", ctrl.withdrawTypes.getWithdrawTypesByUser);
router.get("/:withdrawTypeId", ctrl.withdrawTypes.getWithdrawType);
router.post("/user/:userId", ctrl.withdrawTypes.postWithdrawType);
router.put("/:withdrawTypeId/user/:userId", ctrl.withdrawTypes.putWithdrawType);
router.delete("/:withdrawTypeId", ctrl.withdrawTypes.deleteWithdrawType);

module.exports = router;
