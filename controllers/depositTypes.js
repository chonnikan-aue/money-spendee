const User = require("../models").User;
const DepositType = require("../models").DepositType;

const getDepositTypes = (req, res) => {
  DepositType.findAll({
    include: [
      {
        model: User,
        attributes: ["id", "username"],
      },
    ],
    attributes: ["id", "name", "userId", "budgetPercent", "alertPercent"],
  })
    .then((depositTypes) => {
      res.json(depositTypes);
    })
    .catch((err) => {
      res.json(err);
    });
};

const getDepositTypesByUser = (req, res) => {
  User.findByPk(req.params.userId, {
    include: [
      {
        model: DepositType,
        attributes: ["id", "name", "userId", "budgetPercent", "alertPercent"],
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
};

const getDepositType = (req, res) => {
  DepositType.findByPk(req.params.depositTypeId, {
    include: [
      {
        model: User,
        attributes: ["id", "username"],
      },
    ],
    attributes: ["id", "name", "userId", "budgetPercent", "alertPercent"],
  })
    .then((depositType) => {
      res.json(depositType);
    })
    .catch((err) => {
      res.json(err);
    });
};

const postDepositType = (req, res) => {
  req.body.userId = req.params.userId;
  DepositType.create(req.body)
    .then((newDepositType) => {
      DepositType.findByPk(newDepositType.id, {
        include: [
          {
            model: User,
            attributes: ["id", "username"],
          },
        ],
        attributes: ["id", "name", "userId", "budgetPercent", "alertPercent"],
      })
        .then((depositType) => {
          res.json(depositType);
        })
        .catch((err) => {
          res.json(err);
        });
    })
    .catch((err) => {
      res.json(err);
    });
};

const putDepositType = (req, res) => {
  req.body.userId = req.params.userId;
  DepositType.update(req.body, {
    where: { id: req.params.depositTypeId },
    returning: true,
  }).then((updatedDepositType) => {
    DepositType.findByPk(req.params.depositTypeId, {
      include: [
        {
          model: User,
          attributes: ["id", "username"],
        },
      ],
      attributes: ["id", "name", "userId", "budgetPercent", "alertPercent"],
    })
      .then((depositType) => {
        res.json(depositType);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};

const deleteDepositType = (req, res) => {
  DepositType.destroy({ where: { id: req.params.depositTypeId } }).then(() => {
    res.json({ message: "DepositType deleted" });
  });
};

module.exports = {
  getDepositTypes,
  getDepositTypesByUser,
  getDepositType,
  postDepositType,
  putDepositType,
  deleteDepositType,
};
