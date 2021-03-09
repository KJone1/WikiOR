const express = require("express");
const app = express();
const cors = require("cors");
const pg = require("./db/db-setup");
var morgan = require("morgan");
require("dotenv").config();
const http = require("http").createServer(app);

////
// desc: setup cors and body parser middleware
app.use(cors());
app.use(express.json());

// desc: http logger
app.use(morgan("common"));

////

// desc: configure PORT
const PORT = process.env.PORT;

//desc : setup pg data base
pg();

//desc : Routes
const api_version = "/api/v1";

const ErezRouter = require("./routes/erz.route.js");
app.use(`${api_version}/erez`, ErezRouter);

const VSRouter = require("./routes/vs.route.js");
app.use(`${api_version}/vs`, VSRouter);

//desc : start listing to PORT
http.listen(PORT, function () {
  console.log(`-- server is running on Port: ${PORT} -- `);
});
