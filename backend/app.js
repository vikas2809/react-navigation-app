//creating the entry point of the server
var express = require('express');
var body_parser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var cors=require('cors');
var jwt = require('jsonwebtoken');

mongoose.connect('mongodb://localhost:27017/reactNativeServer');

var app=module.exports=express();

app.set('env',process.env.NODE_ENV || 'production');

app.use(body_parser.urlencoded({extended:true}));

app.use(body_parser.json());

app.use(cors());


routes=require('./routes/routes');
app.use('/api',routes);

var port = process.env.PORT || 8080;

//starting the server
app.listen(port);
console.log('Server starts on port '+port);