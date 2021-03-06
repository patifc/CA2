const mongoose = require('mongoose');
require('dotenv').config();

//connect to mongodb
mongoose.connect(process.env.MONGODB_URL,
 { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
 if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./dog.model');