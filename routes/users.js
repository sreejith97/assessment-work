var express = require("express");
var router = express.Router();
const { List_user, addUser } = require("../Controller/userList");
/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

module.exports = router;

router.route("/").get(List_user);
router.route("/add").get(addUser);
