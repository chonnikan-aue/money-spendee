const Deposit = require("../models").Deposit;

const getDeposits = (req, res) => {
  Deposit.findAll().then((deposits) => {
    res.json(deposits);
  });
};

const getDeposit = (req, res) => {
  Deposit.findByPk(req.params.depositId).then((deposit) => {
    res.json(deposit);
  });
};

const getDepositsByUser = (req, res) => {
  Withdraw.findAll({
    where: {
      userId: req.params.userId,
    },
  }).then((deposits) => {
    res.json(deposits);
  });
};

const postDeposit = (req, res) => {
  Deposit.create(req.body).then((newDeposit) => {
    res.json(newDeposit);
  });
};

const putDeposit = (req, res) => {
  Deposit.update(req.body, {
    where: { id: req.params.depositId },
    returning: true,
  }).then((updatedDeposit) => {
    Deposit.findByPk(req.params.depositId).then((deposit) => {
      res.json(deposit);
    });
  });
};

const deleteDeposit = (req, res) => {
  Deposit.destroy({ where: { id: req.params.depositId } }).then(() => {
    res.json({ message: "Deposit deleted" });
  });
};

module.exports = {
  getDeposits,
  getDeposit,
  getDepositsByUser,
  postDeposit,
  putDeposit,
  deleteDeposit,
};
