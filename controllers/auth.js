const User = require("../models").User;

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = (req, res) => {
  User.findOne({
    where: {
      username: req.query.username,
    },
  })
    .then((foundUser) => {
      if (foundUser) {
        bcrypt.compare(req.query.password, foundUser.password, (err, match) => {
          if (match) {
            const token = jwt.sign(
              {
                username: foundUser.username,
                id: foundUser.id,
              },
              process.env.JWT_SECRET,
              {
                expiresIn: "30 days",
              }
            );
            res.json(token);
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
          const token = jwt.sign(
            {
              username: newUser.username,
              id: newUser.id,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "30 days",
            }
          );
          res.json(token);
        })
        .catch((err) => {
          res.json(err);
        });
    });
  });
};

module.exports = {
  login,
  signup,
};
