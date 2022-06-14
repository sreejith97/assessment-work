var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

const userRoute = require("./routes/user");
// const healthRoute = require("./routes/health");
// const userListRoute = require("./routes/userList");
// const responseRoute = require("./routes/response");
// const tokenRoute = require("./routes/token");
const fetch = require("node-fetch");

const mongoose = require("mongoose");

var app = express();

app.use(express.urlencoded({ extended: false }));
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use("/users", usersRouter);
app.use("/", userRoute);
// app.use("/health", healthRoute);
// app.use("/response", responseRoute);
// app.use("/token", tokenRoute);
app.use("/user", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

const dbUrl =
  "mongodb+srv://admin:jjkfsGjjkQJ1cB0I@database.dx08k.mongodb.net/database?retryWrites=true&w=majority";

const connectionParams = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
  .connect(dbUrl, connectionParams)
  .then(() => {
    console.info("connected to the DB");
  })
  .catch((e) => {
    console.log("err:", e);
  });

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
