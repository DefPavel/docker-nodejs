const express = require("express");
const app = express();
const path = require("path");
const favicon = require("serve-favicon");
const bp = require("body-parser");
//const logger = require("morgan");

var indexRouter = require("./routes/index");

// подключить pug шаблонизатор
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//Ссылка на favicon
app.use(favicon(path.join(__dirname, "/public", "favicon.ico")));
// Вывыдо ошибок в режиме dev
//app.use(logger("dev"));

// Парсинг body
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// Ошибка 404
app.use(function (req, res, next) {
    var err = new Error("Страница не найдена");
    err.status = 404;
    next(err);
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

app.listen(3000);

module.exports = app;
