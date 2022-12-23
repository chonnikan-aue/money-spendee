require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser").json();
app.use(bodyParser);

const router = express.Router()

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

// app.use("/", routes.transaction);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
