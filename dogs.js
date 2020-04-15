var express = require("express"),
    app = express(),
    bodyParse = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/dogs");
//app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var dogSchema= new mongoose.Schema({
 name: String,
 description: String,
 breed: String,
 age: Number,
 sex: String,
});

var Dog = mongoose.model("Dogs", dogSchema);

//addin a new dog to the Db
Dog.create(
    {
        name: "lala",
        description: "adventures",
        breed: "poodle",
        age: 01,
        sex: "female"
    }, function(err, dog){
    if(err){
        console.log("err");
    } else{
        console.log("new dog: ");
        console.log(dog);
    }
    });

    app.get("/dogs", function(req, res){
        //get all dogs from DB
        Dog.find({}, function(err, alldogs){
            if(err){
                console.log(err);
            }else{
                res. render("dogs",{dog:alldogs});
            }
        });
    });


/*dog.save(function( err, dog){
    if(err){
       console.log("Something went wrong!")

    }else {
        console.log(" We just saved Dog to the DB")
        console.log(dog);
    }

});*/

//retrieve all cats from the Db