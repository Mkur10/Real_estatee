const express = require("express");

const router =express.Router();
const {test,updateUser,deleteUser, getUserListings, getUser}  = require("../controllers/user.controller.js");
const verifyToken = require("../utils/verifyUser.js");
//const updateUser = require("../controllers/user.controller.js")

router.get('/test',test);
router.post('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser);
router.get('/listings/:id', verifyToken, getUserListings);
router.get('/:id', verifyToken, getUser);

module.exports=router;