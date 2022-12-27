const Withdraw = require("../models").Withdraw;

const getWithdraws = (req, res) => {
  Withdraw.findAll().then((withdraws) => {
    res.json(withdraws);
  });
};

const getWithdraw = (req, res) => {
  Withdraw.findByPk(req.params.withdrawId).then((withdraw) => {
    res.json(withdraw);
  });
};

const getWithdrawsByUser = (req, res) => {
  Withdraw.findAll({
    where: {
      userId: req.params.userId,
    },
  }).then((withdraws) => {
    res.json(withdraws);
  });
};

const postWithdraw = (req, res) => {
  Withdraw.create(req.body).then((newWithdraw) => {
    res.json(newWithdraw);
  });
};

const putWithdraw = (req, res) => {
  Withdraw.update(req.body, {
    where: { id: req.params.withdrawId },
    returning: true,
  }).then((updatedWithdraw) => {
    Withdraw.findByPk(req.params.withdrawId).then((withdraw) => {
      res.json(withdraw);
    });
  });
};

const deleteWithdraw = (req, res) => {
  Withdraw.destroy({ where: { id: req.params.withdrawId } }).then(() => {
    res.json({ message: "Withdraw deleted" });
  });
};

module.exports = {
  getWithdraws,
  getWithdraw,
  getWithdrawsByUser,
  postWithdraw,
  putWithdraw,
  deleteWithdraw,
};
