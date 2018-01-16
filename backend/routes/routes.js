//creating the routing path from where we get the request and response
var express = require('express');

var router=express.Router();

var controller=require('../controllers/controller');


//registring the user in the backend
router.route('/v1/user/createUser').post(controller.createUser);

//getting the all user from the collection
router.route('/v1/user/getAllUser').get(controller.getAllUser);

//authenticate the user and generate the token for the valid user
router.route('/v1/user/authenticateUser').post(controller.authenticateUser);

//getting the complete details of the user on the basis of their email
router.route('/v1/user/getUserDetail/:email').get(controller.getUserDetails);


module.exports=router;