const mongo = require("mongoose");
const URI = process.env.MONGODB_URL;
mongo.connect(URI);

mongo.connection.on("connected", () => {
  console.log("Connected to database");
});

mongo.connection.on("error", (err) => {
  if (err) {
    console.log(`Error in Database connections : ${err}`);
  }
});
