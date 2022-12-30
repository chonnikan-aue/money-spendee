require("dotenv").config();

const express = require("express");
const app = express();

const routes = require("./routes");

const jwt = require("jsonwebtoken");

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser").json();
app.use(bodyParser);

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["Authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
  }
  jwt.verify(req.token, process.env.JWT_SECRET, (err, decodedUser) => {
    if (err || !decodedUser)
      return res.status(401).json({ error: "Unauthorized Request" });
    req.user = decodedUser;
    next();
  });
};

app.use("/auth", routes.auth);
app.use("/user", routes.users);
app.use("/deposit", routes.deposits);
app.use("/withdraw", routes.withdraws);
app.use("/deposit-type", routes.depositTypes);
app.use("/withdraw-type", routes.withdrawTypes);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
