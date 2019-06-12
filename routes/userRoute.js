const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const config = require('../config/default.json');
const auth = require('../middleware/auth');


// item model
const User = require('../models/User');

// @route   GET /
// @desc    get all users
router.get('/',  (req, res) => {
    User.find()
        .then(users => res.json(users))
});

// @route   POST /register
// @desc    create a new user
router.post('/register', (req, res) => {
    const { first_name, last_name, mail, password } = req.body;

    if(!first_name || !last_name || !mail || !password){
        return res.status(400).json({msg: 'Pleas enter all fields.'})
    }

    User.findOne({ mail })
        .then(user => {
            if(user) return res.status(400).json({msg: 'Mail already exists.'});

            const newUser = new User({
                first_name,
                last_name,
                mail,
                role: "user",
                password,
            });

            newUser.save()
                .then(user => {

                    jwt.sign(
                        { id: user.id } ,
                        config.jwtSecret,
                        { expiresIn: 3600 },
                        (err, token) => {
                            if(err) throw err;

                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    mail: user.mail,
                                }
                            })
                        }
                    )


                })
                .catch((err) => {console.log(err)});
        });
});

// @route   POST /login
// @desc    create a new user
router.post('/login', (req, res) => {
    console.log('new login atempted');
    const data = req.body;
    const mail = data.mail;
    const password = data.password;

    if(!mail || !password){
        return res.status(400).json({msg: 'Pleas enter all fields.'})
    }

    User.findOne({ mail })
        .then(user => {
            if(!user) return res.status(400).json({msg: 'User not found.'});

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({msg: "Invalid credentials."});

                    jwt.sign(
                        {
                            id: user.id,
                            role: user.role
                        } ,
                        config.jwtSecret,
                        { expiresIn: 3600 },
                        (err, token) => {
                            if(err) throw err;

                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    mail: user.mail,
                                    role: user.role
                                }
                            })
                        }
                    )
                })
        });
});

// @route   get /data
// @desc    get data of logged in user
router.get('/data', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user))
});

module.exports = router;