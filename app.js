// Bring in Express Server
const express = require("express");

// Bring in path module
const path = require('path');

// Bring in bodyParser
const bodyParser = require("body-parser");

// Bring in cors moudule
const cors = require('cors');

// Bring in passport for authentication
const passport = require('passport');

// Bring in mongodb shell
const mongoose = require('mongoose');

// Initializing the epress server
const app = express();

// Bring in the Users Route
const users = require('./routes/users');

// Defining the Database Connection //
const config = require('./config/database');
mongoose.connect(config.database);
// Succssfull connection
mongoose.connection.on('connected', () => {
    console.log("Connected to database" + config.database);
});
// On connection failure
mongoose.connection.on('error', (err) => {
    console.log("Connection to database is fialed" + config.database);
});

// Database Connection //


// Defining the port
const port = 5000;



// Defing the middlewares //

// Cors middlewares
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Bodyparser middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Passport Strategy
require('./config/passport')(passport);

// Defining the middleware of the application //


// Routes goes below it // 
// index route
app.get('/', (req, res) => {
    res.send("Hello world");
});

// User Routes
app.use('/users', users);

// Routes goes above it //


// Simple Listener for the port
app.listen(port, () => {
    console.log("Server stared on port: " + port);
});




