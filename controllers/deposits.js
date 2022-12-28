const User = require("../models").User;
const Deposit = require("../models").Deposit;
const DepositType = require("../models").DepositType;

const getDeposits = (req, res) => {
  Deposit.findAll({
    include: [
      {
        model: DepositType,
        attributes: ["id", "name", "budgetPercent", "alertPercent"],
      },
      {
        model: User,
        attributes: ["id", "username"],
      },
    ],
    attributes: ["id", "name", "amount", "date", "typeId", "userId"],
  })
    .then((deposits) => {
      res.json(deposits);
    })
    .catch((err) => {
      res.json(err);
    });
};

const getDepositsByUser = (req, res) => {
  Deposit.findAll({
    where: {
      userId: req.params.userId,
    },
    include: [
      {
        model: DepositType,
        attributes: ["id", "name", "budgetPercent", "alertPercent"],
      },
      {
        model: User,
        attributes: ["id", "username"],
      },
    ],
    attributes: ["id", "name", "amount", "date", "typeId", "userId"],
  })
    .then((deposits) => {
      res.json(deposits);
    })
    .catch((err) => {
      res.json(err);
    });
};

const getDeposit = (req, res) => {
  Deposit.findByPk(req.params.depositId, {
    include: [
      {
        model: DepositType,
        attributes: ["id", "name", "budgetPercent", "alertPercent"],
      },
      {
        model: User,
        attributes: ["id", "username"],
      },
    ],
    attributes: ["id", "name", "amount", "date", "typeId", "userId"],
  })
    .then((deposit) => {
      res.json(deposit);
    })
    .catch((err) => {
      res.json(err);
    });
};

const postDeposit = (req, res) => {
  req.body.userId = req.params.userId;
  Deposit.create(req.body)
    .then((newDeposit) => {
      Deposit.findByPk(newDeposit.id, {
        include: [
          {
            model: DepositType,
            attributes: ["id", "name", "budgetPercent", "alertPercent"],
          },
          {
            model: User,
            attributes: ["id", "username"],
          },
        ],
        attributes: ["id", "name", "amount", "date", "typeId", "userId"],
      })
        .then((deposit) => {
          res.json(deposit);
        })
        .catch((err) => {
          res.json(err);
        });
    })
    .catch((err) => {
      res.json(err);
    });
};

const putDeposit = (req, res) => {
  req.body.userId = req.params.userId;
  Deposit.update(req.body, {
    where: { id: req.params.depositId },
    returning: true,
  })
    .then((updatedDeposit) => {
      Deposit.findByPk(req.params.depositId, {
        include: [
          {
            model: DepositType,
            attributes: ["id", "name", "budgetPercent", "alertPercent"],
          },
          {
            model: User,
            attributes: ["id", "username"],
          },
        ],
        attributes: ["id", "name", "amount", "date", "typeId", "userId"],
      })
        .then((deposit) => {
          res.json(deposit);
        })
        .catch((err) => {
          res.json(err);
        });
    })
    .catch((err) => {
      res.json(err);
    });
};

const deleteDeposit = (req, res) => {
  Deposit.destroy({ where: { id: req.params.depositId } })
    .then(() => {
      res.json({ message: "Deposit deleted" });
    })
    .catch((err) => {
      res.json(err);
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
