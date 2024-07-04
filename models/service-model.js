const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  services: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  provider: {
    type: String,
    require: true,
  },
});
const Service = new mongoose.model("services", serviceSchema);
module.exports = Service;
