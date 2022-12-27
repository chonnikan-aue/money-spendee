const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/", ctrl.withdraws.getWithdraws);
router.get("/user/:userId", ctrl.withdraws.getWithdrawsByUser);
router.get("/:withdrawId", ctrl.withdraws.getWithdraw);
router.post("/", ctrl.withdraws.postWithdraw);
router.put("/:withdrawId", ctrl.withdraws.putWithdraw);
router.delete("/:withdrawId", ctrl.withdraws.deleteWithdraw);

module.exports = router;
