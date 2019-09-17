const express = require("express");
// const bodyParser = require("body-parser");
const mongooseConnect = require("./config/initdb.js");
const history = require("./models/history.js")

const app = new express();
mongooseConnect();
