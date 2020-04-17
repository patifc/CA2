const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create dog Schema and model
var dogSchema = new Schema({
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
},

//add into the  list 
});

mongoose.model('Dog', dogSchema);
