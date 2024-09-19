
const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
router.get("/", userController.createTableGet, userController.usersListGet)
router.get("/delete", userController.deleteGet)
router.get("/populate", userController.populateGet)
router.get("/test",userController.testGet)
module.exports = router;


