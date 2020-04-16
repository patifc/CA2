const express = require('express');
const router = express.Router();
const Dog = require('../models/dogs');

//get a list of dogs from FB
router.get('/dogs', function(req, res, next){
res.send({type: 'GET'});
});

//ADD NEW DOG TO DB
router.post('/dogs', function(req, res, next){
  Dog.create(req.body).then(function(dog){
res.send(dog);
  }).catch(next);

});

//UPDATE A DOG IN THE DB
router.put('/dogs/:id', function(req, res, next){
     Dog.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){   
          Ninja.findOne({_id: req.params.id}).then(function(dog){   
        res.send(dog);
          });
}).catch(next);
});


//DELETE DOG FROM DB
router.delete('/dogs/:id', function(req, res, next){
     Dog.findByIdAndRemove({_id: req.params.id}).then(function(dog){
        res.send(dog);
    }).catch(next);
});

module.exports = router;