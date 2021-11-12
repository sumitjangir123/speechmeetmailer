const express = require('express');
const router = express.Router();

//setting up user controller call
const userController = require("../controllers/user_controller");

router.post('/create-mail', express.json() ,userController.createMail);

//make it available for index.js
module.exports = router;
