const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/", ctrl.depositTypes.getDepositTypes);
router.get("/user/:userId", ctrl.depositTypes.getDepositTypesByUser);
router.get("/:depositTypeId", ctrl.depositTypes.getDepositType);
router.post("/user/:userId", ctrl.depositTypes.postDepositType);
router.put("/:depositTypeId/user/:userId", ctrl.depositTypes.putDepositType);
router.delete("/:depositTypeId", ctrl.depositTypes.deleteDepositType);

module.exports = router;
