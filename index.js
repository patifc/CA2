const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');

//set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/doggo');
mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.use(bodyParser.json());
//initialize routes
app.use('/api',require('./routes/api'));

//error handling middleware
app.use(function(err, req, res, next){
     console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});

});

//This is where we as the server to be listening to user with a specified IP and Port
app.listen(process.env.PORT || 4000, function () {
    console.log("My puppys Server has Started!");
});
