const express = require('express');
//port number
const port = 5000;
//databse 
const db = require('./config/mongoose');

const passport = require('passport');
const passportJWT = require('./config/passport-jwt');

const app = express();

app.use(express.json());

//redirecting routes
app.use('/', require('./routes'));

app.listen(port, function (err) {
    if (err) { console.log('error'); return; }
    
    console.log(`server is running on ${port}`);
});