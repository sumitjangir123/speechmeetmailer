const express =require('express');
const router=express.Router();

console.log("router loaded !!");

router.use("/users",express.json(),require("./users"));
//make it for outer index.js
module.exports =router;