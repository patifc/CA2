const express = require('express');
const router = express.Router();

//get a list of dogs from FB
router.get('/dogs', function(req, res){
res.send({type: 'GET'});
});

//ADD NEW DOG TO DB
router.post('/dogs', function(req, res){
   console.log (req.body);   
res.send({
    type: 'POST',
    name: req.body.name,
});
});

//UPDATE A DOG IN THE DB
router.put('/dogs/:id', function(req, res){
res.send({type: 'PUT'});
});

router.get('/dogs', function(req, res){
res.send({type: 'GET'});
});

//DELETE DOG FROM DB
router.delete('/dogs/:id', function(req, res){
res.send({type: 'DELETE'});
});

module.exports = router;