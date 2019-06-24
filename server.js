const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/userRoute');
const rooms = require('./routes/roomRoute');
const reservation = require('./routes/reservationRoute');
const config = require('./config/default.json');

const app =  express();

// bodyParser middleware
app.use(express.json());

//database connection
mongoose.connect('mongodb://localhost/' + config.dbName, {useNewUrlParser: true, useCreateIndex: true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("DB connection opened: " + config.dbName);
});

// use routes
app.use('/user', users);
app.use('/room', rooms);
app.use('/reservation', reservation);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('server started on port: ' + port));