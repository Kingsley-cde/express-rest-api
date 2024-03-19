const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const uri = process.env.MONGODB_URI;

const promise = mongoose.connect(uri);

promise
  .then(() => {
    console.log("connected to mingodb database");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = uri;
