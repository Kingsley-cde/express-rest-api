const dotenv = require("dotenv");
const mongodb = require("mongodb");

dotenv.config();
const uri = process.env.MONGODB_URI;
const client = new mongodb.MongoClient(uri);

async function run() {
  await client.connect();
}
run()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = client;
