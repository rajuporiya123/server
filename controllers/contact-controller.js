const Contact = require("../models/contact-model");

const contact = async (req, res) => {

  const data = await Contact.create(req.body);
  try {
    res
      .status(200)
      .json({ data: data, message: "contact sucsessfully added !" });
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
  }
};
module.exports = contact;
