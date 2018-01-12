//imoporting the user model from the models

var User = require('../models/user');
var jwt = require('jsonwebtoken');
var express= require('express');
var app=express();
app.set('superSecret','react-native-token-demo');
var bcrypt=require('bcrypt');
var nodemailer = require('nodemailer');

exports.createUser=(request,response)=>{
    var user=new User({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
        password: request.body.password
    });

    console.log("password: "+request.body.password);
    var salt = bcrypt.genSaltSync(10);
    console.log(salt);
    var hash=bcrypt.hashSync(user.password,salt);
    console.log(hash);
    user.password=hash;
    console.log("password"+request.body.password);
    
    user.save((err,res)=>{
        if(err)
        {
            response.json({
                success: false,
                error:err,
                message: "Registration Failed!!!Please enter your correct credentials"
            })
        }
        else{
            response.json({
                success: true,
                body: res
            })
        }
    })
}

//getting the all user exists in the collection
exports.getAllUser=(req,res)=>{
    User.find((err,response)=>{
        if(err)
        {
            res.json({
                "status": "empty",
                "error": "404 Page Not Found"
            })
        }
        else
        {
            res.json({
                status: true,
                respData: response
            });
        }  
    })
}


//requesting for authenticate the user requesting for the login access in the website
exports.authenticateUser=(req,res)=>{
    console.log("user authentication");
    console.log(req.body.password);
    User.findOne({email:req.body.email},(err,user)=>{
        if(err)
        {
            res.json({
                status: 'empty',
                error: "404 Page Not Found"
            })
        }
        if(!user){
            res.json({
                success:false,
                message:'Authentication failed. User not found' 
            })
        }
        else if(user){
            var result=bcrypt.compareSync(user.password,req.body.password);
            console.log(result);
            //check if password matches
            if(!bcrypt.compareSync(req.body.password,user.password)){
                console.log(req.body.password);
                console.log(user.password);
                var result=bcrypt.compareSync(user.password,req.body.password);
                console.log(result);
                res.json({
                    success: false,
                    message: 'Authentication failed. Wrong Password.'
                })
            }else{
                // if user is found and password is right
                 // create a token with only our given payload
                 // we don't want to pass in the entire user since that has the password
                 const payload ={
                     email: user.email,
                     password: user.password
                 };
                 var token=jwt.sign(payload,app.get('superSecret'),{
                     expiresIn: 3600 //expires in 1 hours
                 })

                 //return the information including token as JSON
                 res.json({
                     success: true,
                     message: 'Enjoy your token!',
                     data: user,
                     token: token
                 });
            }
        }
    })

}

