const User = require("../models/userList");

exports.List_user = async (req, res) => {
  try {
    console.log("hello");
    const userList = await User.find();
    console.log("Details", userList);
    res.status(200).json({
      sucess: true,
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
      user_id: req.body.user_id,
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

exports.editUser = async (req, res) => {
  try {
    const user_id = req.params.id;
    const update = req.body;
    const result = await User.findByIdAndUpdate(user_id, update);
    res.send(result);
  } catch (error) {
    res.status(500).json({ sucess: false, error });
  }
};
