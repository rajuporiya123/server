const Service = require("../models/service-model");

const service = async (req, res) => {
  try {
    const data = await Service.find();
    console.log("data", data);
    res
      .status(200)
      .json({ data: data, message: "service fetch sucsessfully !" });
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
  }
};

module.exports = service;
