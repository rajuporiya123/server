const Contact = require("../models/contact-model");
const User = require("../models/user-model");

const adminUser = async (req, res) => {
  try {
    const admin = await User.find({}, { password: 0 });
    if (admin.length === 0) {
      console.log("No admin users found in the database.");
    }
    console.log("admin", admin);
    res.status(200).json({ data: admin, message: "fetch data !" });
  } catch (error) {
    res.status(401).json({ message: "somthing went wrong !" });
  }
};
const adminContact = async (req, res) => {
  try {
    const admin = await Contact.find();
    if (admin.length === 0) {
      console.log("No admin contact found in the database.");
    }
    res.status(200).json({ data: admin, message: "fetch data !" });
  } catch (error) {
    res.status(401).json({ message: "somthing went wrong !" });
  }
};

const getuserById = async (req, res) => {
  
  const getUser = await User.findOne({_id:req.params.id},{password:0})
  try {
    res.status(200).json({data:getUser, Message: "User Get Sucsessfully" });
  } catch (error) {
    res.status(400).send({ Message: "something went wrong" });
  }
};
const updateuserById = async (req, res) => {

  const updateData = req.body
  
  await User.updateOne({_id:req.params.id},{$set:updateData})

  const upnewUser = await User.findById(req.params.id, { password: 0 });
  try {
    res.status(200).json({data:upnewUser, Message: "User Update Sucsessfully" });
  } catch (error) {
    res.status(400).send({ Message: "something went wrong" });
  }
};
const deleteuserById = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(200).json({ Message: "User is Deleted Sucsessfully" });
  } catch (error) {
    res.status(400).send({ Message: "something went wrong" });
  }
};
const deletecontactById = async (req, res) => {
  try {
    await Contact.deleteOne({ _id: req.params.id });
    res.status(200).json({ Message: "Contact is Deleted Sucsessfully" });
  } catch (error) {
    res.status(400).send({ Message: "something went wrong" });
  }
};

module.exports = { adminUser, adminContact, getuserById, updateuserById,deleteuserById,deletecontactById };
