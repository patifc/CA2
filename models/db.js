const mongoose = require('mongoose');

//connect to mongodb
mongoose.connect('mongodb+srv://dogs:dogsdb@cluster0-wasmn.mongodb.net/test?retryWrites=true&w=majority' , { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
 if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./dog.model');