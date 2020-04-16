const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create dog Schema and model
const DogSchema = new Schema({
name:{
    type: String,
    required: [true, 'Name field is required']
},
description: {
    type: String
},
breed :{
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

const Dog = mongoose.model('dog', DogSchema);

module.exports = Dog;