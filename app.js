var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const http = require("http");
const db = require("./models/index");
const eventRouter = require("./routes/events");
var usersRouter = require("./routes/users");
const mediaRouter = require('./routes/medias')
var reclRouter = require("./routes/reclamation");
var commentaireRouter = require("./routes/commentaires");
const annonce_transportRouter = require('./routes/annonce_transport')
var notyRouter = require("./routes/notification");
var centreRouter = require("./routes/centre");
const participantRouter = require('./routes/participant')
const cors = require('cors');
var app = express();
require("dotenv").config();
db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
app.use(cors())
app.use(logger("dev"));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRouter);
app.use("/events", eventRouter);
app.use("/centres", centreRouter);
app.use("/commentaires", commentaireRouter);
app.use('/media',mediaRouter)
app.use('/transport',annonce_transportRouter)
app.use("/reclamations", reclRouter);
app.use("/notifications", notyRouter);
app.use("/centres", centreRouter);
app.use("/participant",participantRouter)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
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


app.listen(3000, () => {
  console.log("listening on port 3000");
});
