const User = require("../models/userList");

exports.List_user = async (req, res) => {
  try {
    console.log("hello");
    const userList = await User.find();
    console.log("Details", userList);
    res.status(200).json({
      sucess: false,
      data: userList,
      data2: "hello",
    });
  } catch (err) {
    res.status(500).json({ sucess: false, err });
  }
};

exports.addUser = async (req, res) => {
  try {
    const newUser = new User({
      user_name: req.body.user_name,
      email: req.body.email,
      created_at: req.body.created_at,
      edit_at: req.body.edit_at,
    });
    const user = await newUser.save();
    res.status(200).json({ sucess: true });
  } catch (err) {
    res.status(500).json({ sucess: false, err });
  }
};
