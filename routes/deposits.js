const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/", ctrl.deposits.getDeposits);
router.get("/user/:userId", ctrl.deposits.getDepositsByUser);
router.get("/:depositId", ctrl.deposits.getDeposit);
router.post("/", ctrl.deposits.postDeposit);
router.put("/:depositId", ctrl.deposits.putDeposit);
router.delete("/:depositId", ctrl.deposits.deleteDeposit);

module.exports = router;
