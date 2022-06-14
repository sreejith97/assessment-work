const express = require("express");
const { addUser } = require("../Controller/user");
const { List_user, editUser } = require("../Controller/userList");
const { updateMany } = require("../models/userList");
const router = express.Router();

router.route("/").get(List_user);
router.route("/add").get(addUser);
router.route("/update/:id").put(editUser);
