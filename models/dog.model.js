const mongoose = require('mongoose');

//create dog Schema and model
var dogSchema = new mongoose.Schema({
name:{
    type: String,
    required: [true, 'Name field is required']
},
description: {
    type: String
},
breed: {
    type: String
},
age: {
    type: "number"
},
sex: {
    type: String
}

//add into the  list 
});

mongoose.model('Dog', dogSchema);
