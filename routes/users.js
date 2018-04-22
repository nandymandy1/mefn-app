const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, msg: 'Failed to Register User'});
        } else {
            res.json({success: true, msg: 'User Registeration is Successful'});
        }
    });

});

// Authentication
router.get('/authenticate', (req, res, next) => {
    res.send('Authentication');
});

// Profile route
router.get('/profile', (req, res, next) => {
    res.send('Profile');
});

// Validate
router.get('/validate', (req, res, next) => {
    res.send('Validate');
});










module.exports = router