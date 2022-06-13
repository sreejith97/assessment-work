const express = require("express");
const { addUser } = require("../Controller/user");
const { List_user } = require("../Controller/userList");
const router = express.Router();

router.route("/").get(List_user);
router.route("/add").get(addUser);
