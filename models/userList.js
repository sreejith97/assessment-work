const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: true,
  },
  user_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  created_at: {
    type: String,
    required: true,
  },
  edit_at: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("user_list", userSchema);
module.exports = UserModel;
