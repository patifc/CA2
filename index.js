const express = require('express');
const bodyParser = require('body-parser');

//set up express app
const app = express();

app.use(bodyParser.json());
//initialize routes
app.use('/api',require('./api'));


//This is where we as the server to be listening to user with a specified IP and Port
app.listen(process.env.PORT || 4000, function () {
    console.log("My puppys Server has Started!");
});
