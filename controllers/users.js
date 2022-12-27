const User = require("../models").User;
const Deposit = require("../models").Deposit;
const Withdraw = require("../models").Withdraw;
const DepositTypeUser = require("../models").DepositTypeUser;
const WithdrawTypeUser = require("../models").WithdrawTypeUser;

const bcrypt = require("bcryptjs");

const getUsers = (req, res) => {
  User.findAll().then((users) => {
    res.json(users);
  });
};

const getUser = (req, res) => {
  User.findByPk(req.params.id).then((user) => {
    res.json(user);
  });
};

const login = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((user) => {
    if (user) {
      bcrypt.compare(req.body.password, user.password, (err, match) => {
        if (match) {
          res.json(user);
        } else {
          //   return res.status(400).json(err);
          return res.sendStatus(400);
        }
      });
    }
  });
};

const signup = (req, res) => {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return res.status(500).json(err);
    bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
      if (err) return res.status(500).json(err);
      req.body.password = hashedPassword;
      User.create(req.body)
        .then((newUser) => {
          res.json(newUser);
        })
        .catch((err) => {
          console.log(err);
          res.send(`error: ${err}`);
        });
    });
  });
};

const putUser = (req, res) => {
  User.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  }).then((updatedUser) => {
    User.findByPk(req.params.id).then((user) => {
      res.json(user);
    });
  });
};

const deleteUser = (req, res) => {
  User.destroy({ where: { id: req.params.id } }).then(() => {
    Deposit.destroy({ where: { userId: req.params.id } }).then(() => {
      Withdraw.destroy({ where: { userId: req.params.id } }).then(() => {
        WithdrawTypeUser.destroy({ where: { userId: req.params.id } }).then(
          () => {
            DepositTypeUser.destroy({ where: { userId: req.params.id } }).then(
              () => {
                res.json({ message: "User deleted" });
              }
            );
          }
        );
      });
    });
  });
};

module.exports = {
  getUsers,
  getUser,
  login,
  signup,
  putUser,
  deleteUser,
};
