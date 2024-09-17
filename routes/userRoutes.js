
const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
router.get("/", userController.usersListGet)
router.get("/delete",userController.deleteGet)
module.exports = router;