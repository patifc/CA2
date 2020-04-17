const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');

//set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb+srv://dogs:dogsdb@cluster0-wasmn.mongodb.net/test?retryWrites=true&w=majority' , { useUnifiedTopology: true, useNewUrlParser: true },
//mongoose.Promise = global.Promise;

//mongoose.connection.on('error', (err) => { 
  //  console.log('Mongodb Error: ', err); 
    //process.exit();
    ()=> console.log ('connected to Db')
);
mongoose.connection.on('connected', () => { 
    console.log('MongoDB is successfully connected');
});

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
app.listen(process.env.PORT || 3000, function () {
    console.log("My puppys Server has Started!");
});
