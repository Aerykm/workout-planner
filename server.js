const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//connecting to mongoDB
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/Workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

//requiring the routes for functionality
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});