const User = require("../models").User;
const Deposit = require("../models").Deposit;
const Withdraw = require("../models").Withdraw;
const DepositType = require("../models").DepositType;
const WithdrawType = require("../models").WithdrawType;

const bcrypt = require("bcryptjs");

const login = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((foundUser) => {
      if (foundUser) {
        bcrypt.compare(req.body.password, foundUser.password, (err, match) => {
          if (match) {
            User.findByPk(foundUser.id, {
              include: [
                {
                  model: Deposit,
                  attributes: [
                    "id",
                    "name",
                    "amount",
                    "date",
                    "typeId",
                    "userId",
                  ],
                },
                {
                  model: DepositType,
                  attributes: ["id", "name", "budgetPercent", "alertPercent"],
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
              attributes: ["id", "username"],
            })
              .then((user) => {
                res.json(user);
              })
              .catch((err) => {
                res.json(err);
              });
          } else {
            return res.sendStatus(400);
          }
        });
      }
    })
    .catch((err) => {
      res.json(err);
    });
};

const signup = (req, res) => {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return res.sendStatus(500);
    bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
      if (err) return res.sendStatus(500);
      req.body.password = hashedPassword;
      User.create(req.body)
        .then((newUser) => {
          User.findByPk(newUser.id, {
            include: [
              {
                model: Deposit,
                attributes: [
                  "id",
                  "name",
                  "amount",
                  "date",
                  "typeId",
                  "userId",
                ],
              },
              {
                model: DepositType,
                attributes: ["id", "name", "budgetPercent", "alertPercent"],
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
            attributes: ["id", "username"],
          })
            .then((user) => {
              res.json(user);
            })
            .catch((err) => {
              res.json(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });
};

module.exports = {
  login,
  signup,
};
