const User = require("../models").User;
const WithdrawType = require("../models").WithdrawType;

const getWithdrawTypes = (req, res) => {
  WithdrawType.findAll({
    include: [
      {
        model: User,
        attributes: ["id", "username", "fixedIncome"],
      },
    ],
    attributes: ["id", "name", "userId", "budgetPercent", "alertPercent"],
  })
    .then((withdrawTypes) => {
      res.json(withdrawTypes);
    })
    .catch((err) => {
      res.json(err);
    });
};

const getWithdrawTypesByUser = (req, res) => {
  User.findByPk(req.params.userId, {
    include: [
      {
        model: WithdrawType,
        attributes: ["id", "name", "userId", "budgetPercent", "alertPercent"],
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

const getWithdrawType = (req, res) => {
  WithdrawType.findByPk(req.params.withdrawTypeId, {
    include: [
      {
        model: User,
        attributes: ["id", "username", "fixedIncome"],
      },
    ],
    attributes: ["id", "name", "userId", "budgetPercent", "alertPercent"],
  })
    .then((withdrawType) => {
      res.json(withdrawType);
    })
    .catch((err) => {
      res.json(err);
    });
};

const postWithdrawType = (req, res) => {
  req.body.userId = req.params.userId;
  WithdrawType.create(req.body)
    .then((newWithdrawType) => {
      WithdrawType.findByPk(newWithdrawType.id, {
        include: [
          {
            model: User,
            attributes: ["id", "username", "fixedIncome"],
          },
        ],
        attributes: ["id", "name", "userId", "budgetPercent", "alertPercent"],
      })
        .then((withdrawType) => {
          res.json(withdrawType);
        })
        .catch((err) => {
          res.json(err);
        });
    })
    .catch((err) => {
      res.json(err);
    });
};

const putWithdrawType = (req, res) => {
  req.body.userId = req.params.userId;
  WithdrawType.update(req.body, {
    where: { id: req.params.withdrawTypeId },
    returning: true,
  })
    .then((updatedWithdrawType) => {
      WithdrawType.findByPk(req.params.withdrawTypeId, {
        include: [
          {
            model: User,
            attributes: ["id", "username", "fixedIncome"],
          },
        ],
        attributes: ["id", "name", "userId", "budgetPercent", "alertPercent"],
      })
        .then((withdrawType) => {
          res.json(withdrawType);
        })
        .catch((err) => {
          res.json(err);
        });
    })
    .catch((err) => {
      res.json(err);
    });
};

const deleteWithdrawType = (req, res) => {
  WithdrawType.destroy({ where: { id: req.params.withdrawTypeId } }).then(
    () => {
      res.json({ message: "WithdrawType deleted" });
    }
  );
};

module.exports = {
  getWithdrawTypes,
  getWithdrawTypesByUser,
  getWithdrawType,
  postWithdrawType,
  putWithdrawType,
  deleteWithdrawType,
};
