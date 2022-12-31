const User = require("../models").User;
const Deposit = require("../models").Deposit;
const Withdraw = require("../models").Withdraw;
const DepositType = require("../models").DepositType;
const WithdrawType = require("../models").WithdrawType;

const bcrypt = require("bcryptjs");

const getUsers = (req, res) => {
  User.findAll({
    attributes: ["id", "username", "fixedIncome"],
  })
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.json(err);
    });
};

const getUser = (req, res) => {
  User.findByPk(req.params.userId, {
    include: [
      {
        model: Deposit,
        attributes: ["id", "name", "amount", "date", "typeId", "userId"],
      },
      {
        model: DepositType,
        attributes: ["id", "name"],
      },
      {
        model: Withdraw,
        attributes: [
          "id",
          "name",
          "amount",
          "date",
          "typeId",
          "withdrawFromId",
          "userId",
        ],
      },
      {
        model: WithdrawType,
        attributes: ["id", "name", "budgetPercent", "alertPercent"],
      },
    ],
    attributes: ["id", "username", "fixedIncome"],
  })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
};

const getUserByUsername = (req, res) => {
  User.findOne({
    where: { username: req.params.username },
    include: [
      {
        model: Deposit,
        attributes: ["id", "name", "amount", "date", "typeId", "userId"],
      },
      {
        model: DepositType,
        attributes: ["id", "name"],
      },
      {
        model: Withdraw,
        attributes: [
          "id",
          "name",
          "amount",
          "date",
          "typeId",
          "withdrawFromId",
          "userId",
        ],
      },
      {
        model: WithdrawType,
        attributes: ["id", "name", "budgetPercent", "alertPercent"],
      },
    ],
    attributes: ["id", "username", "fixedIncome"],
  })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
};

const putUser = (req, res) => {
  if (req.body.password) {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return res.sendStatus(500);
      bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
        if (err) return res.sendStatus(500);
        req.body.password = hashedPassword;
        User.update(req.body, {
          where: { id: req.params.userId },
          returning: true,
        })
          .then((updatedUser) => {
            User.findByPk(req.params.userId, {
              attributes: ["id", "username", "fixedIncome"],
            })
              .then((user) => {
                res.json(user);
              })
              .catch((err) => {
                res.json(err);
              });
          })
          .catch((err) => {
            res.json(err);
          });
      });
    });
  } else {
    User.findByPk(req.params.userId, {
      attributes: ["id", "username", "password"],
    })
      .then((user) => {
        req.body.password = user.password;
        User.update(req.body, {
          where: { id: req.params.userId },
          returning: true,
        })
          .then((updatedUser) => {
            User.findByPk(req.params.userId, {
              attributes: ["id", "username", "fixedIncome"],
            })
              .then((user) => {
                res.json(user);
              })
              .catch((err) => {
                res.json(err);
              });
          })
          .catch((err) => {
            res.json(err);
          });
      })
      .catch((err) => {
        res.json(err);
      });
  }
};

const deleteUser = (req, res) => {
  User.destroy({ where: { id: req.params.userId } })
    .then(() => {
      Deposit.destroy({ where: { userId: req.params.userId } })
        .then(() => {
          Withdraw.destroy({ where: { userId: req.params.userId } })
            .then(() => {
              WithdrawType.destroy({ where: { userId: req.params.userId } })
                .then(() => {
                  DepositType.destroy({
                    where: { userId: req.params.userId },
                  })
                    .then(() => {
                      res.json({ message: "User deleted" });
                    })
                    .catch((err) => {
                      res.json(err);
                    });
                })
                .catch((err) => {
                  res.json(err);
                });
            })
            .catch((err) => {
              res.json(err);
            });
        })
        .catch((err) => {
          res.json(err);
        });
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = {
  getUsers,
  getUser,
  getUserByUsername,
  putUser,
  deleteUser,
};
