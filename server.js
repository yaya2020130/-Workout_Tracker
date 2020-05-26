const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://<yaya100>:<yaya100>@ds339177.mlab.com:39177/heroku_g19ssmlt", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use("/api",require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
