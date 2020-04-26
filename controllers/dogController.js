const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Dog = mongoose.model('Dog');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

router.get('/', (req, res) => {
    res.render("dog/index", {
        viewTitle: "Insert Dog"
    });
});

router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
        else
        updateRecord(req, res);
});


//INSERTING NEW DOG 
function insertRecord(req, res) {
    var dog = new Dog();
    dog.name = req.body.name;
    dog.description = req.body.description;
    dog.breed = req.body.breed;
    dog.age = req.body.age;
    dog.sex = req.body.sex;
    dog.save((err, doc) => {
        if (!err)
            res.redirect('dog/list');
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("dog/index", {
                    viewTitle: "Insert Dog",
                    dog: req.body
                });
            }
            else
                console.log('Error during record insertion : ' + err);
        }
    });
}
//UPDATING INFORMATION ALREADY INSERTED INTO THE db
function updateRecord(req, res) {
    Dog.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('dog/list'); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("dog/index", {
                    viewTitle: 'Update Dog',
                    dog: req.body
                });
            }
            else
                console.log('Error during record update : ' + err);
        }
    });
}

//CHECHING THE LIST OF DOGS
router.get('/list', (req, res) => {
    Dog.find((err, docs) => {
        if (!err) {
            res.render("dog/list", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving dog list :' + err);
        }
    });
});

//NAME AND BREED ARE MANDATORY
function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'name':
                body['nameError'] = err.errors[field].message;
                break;
            case 'breed':
                body['breedError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

router.get('/:id', (req, res) => {
    Dog.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("dog/index", {
                viewTitle: "Update Dog",
                dog: doc
            });
        }
    });
});
//DELETING FROM DB
router.get('/delete/:id', (req, res) => {
    Dog.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/dog/list');
        }
        else { console.log('Error in dog delete :' + err); }
    });
});

module.exports = router;