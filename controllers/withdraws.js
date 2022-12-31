const User = require("../models").User;
const Withdraw = require("../models").Withdraw;
const DepositType = require("../models").DepositType;
const WithdrawType = require("../models").WithdrawType;

const getWithdraws = (req, res) => {
  Withdraw.findAll({
    include: [
      {
        model: WithdrawType,
        attributes: ["id", "name", "budgetPercent", "alertPercent"],
      },
      {
        model: DepositType,
        attributes: ["id", "name"],
      },
      {
        model: User,
        attributes: ["id", "username", "fixedIncome"],
      },
    ],
    attributes: [
      "id",
      "name",
      "amount",
      "date",
      "typeId",
      "withdrawFromId",
      "userId",
    ],
  })
    .then((withdraws) => {
      res.json(withdraws);
    })
    .catch((err) => {
      res.json(err);
    });
};

const getWithdrawsByUser = (req, res) => {
  Withdraw.findAll({
    where: {
      userId: req.params.userId,
    },
    include: [
      {
        model: WithdrawType,
        attributes: ["id", "name", "budgetPercent", "alertPercent"],
      },
      {
        model: DepositType,
        attributes: ["id", "name"],
      },
      {
        model: User,
        attributes: ["id", "username", "fixedIncome"],
      },
    ],
    attributes: [
      "id",
      "name",
      "amount",
      "date",
      "typeId",
      "withdrawFromId",
      "userId",
    ],
  })
    .then((withdraws) => {
      res.json(withdraws);
    })
    .catch((err) => {
      res.json(err);
    });
};

const getWithdraw = (req, res) => {
  Withdraw.findByPk(req.params.withdrawId, {
    include: [
      {
        model: WithdrawType,
        attributes: ["id", "name", "budgetPercent", "alertPercent"],
      },
      {
        model: DepositType,
        attributes: ["id", "name"],
      },
      {
        model: User,
        attributes: ["id", "username", "fixedIncome"],
      },
    ],
    attributes: [
      "id",
      "name",
      "amount",
      "date",
      "typeId",
      "withdrawFromId",
      "userId",
    ],
  })
    .then((withdraw) => {
      res.json(withdraw);
    })
    .catch((err) => {
      res.json(err);
    });
};

const postWithdraw = (req, res) => {
  req.body.userId = req.params.userId;
  Withdraw.create(req.body)
    .then((newWithdraw) => {
      Withdraw.findByPk(newWithdraw.id, {
        include: [
          {
            model: WithdrawType,
            attributes: ["id", "name", "budgetPercent", "alertPercent"],
          },
          {
            model: DepositType,
            attributes: ["id", "name"],
          },
          {
            model: User,
            attributes: ["id", "username", "fixedIncome"],
          },
        ],
        attributes: [
          "id",
          "name",
          "amount",
          "date",
          "typeId",
          "withdrawFromId",
          "userId",
        ],
      })
        .then((withdraws) => {
          res.json(withdraws);
        })
        .catch((err) => {
          res.json(err);
        });
    })
    .catch((err) => {
      res.json(err);
    });
};

const putWithdraw = (req, res) => {
  req.body.userId = req.params.userId;
  Withdraw.update(req.body, {
    where: { id: req.params.withdrawId },
    returning: true,
  })
    .then((updatedWithdraw) => {
      Withdraw.findByPk(req.params.withdrawId, {
        include: [
          {
            model: WithdrawType,
            attributes: ["id", "name", "budgetPercent", "alertPercent"],
          },
          {
            model: DepositType,
            attributes: ["id", "name"],
          },
          {
            model: User,
            attributes: ["id", "username", "fixedIncome"],
          },
        ],
        attributes: [
          "id",
          "name",
          "amount",
          "date",
          "typeId",
          "withdrawFromId",
          "userId",
        ],
      })
        .then((withdraws) => {
          res.json(withdraws);
        })
        .catch((err) => {
          res.json(err);
        });
    })
    .catch((err) => {
      res.json(err);
    });
};

const deleteWithdraw = (req, res) => {
  Withdraw.destroy({ where: { id: req.params.withdrawId } })
    .then(() => {
      res.json({ message: "Withdraw deleted" });
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = {
  getWithdraws,
  getWithdrawsByUser,
  getWithdraw,
  postWithdraw,
  putWithdraw,
  deleteWithdraw,
};
