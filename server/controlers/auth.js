const express = require('express');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require("../models/User");
const bcrypt = require('bcryptjs');

// Register User
module.exports.register = async(req, res) => {
    
    try{
        const { name, email, password} = req.body;
        let user = await User.findOne({email});
        if(user){
            return res.status(200).json({
                message : "User already exists",
                user
            })
        }
        console.log(req.body);

        user = new User({
            name,
            email,
            password,
        });

        //  Crating Hash Salt
        bcrypt.genSalt(10, (err,salt) => {

            bcrypt.hash(user.password, salt, async(err,hash) => {

                if(err) throw err;
                user.password = hash;
                await user.save()
                .then(user => {

                    jwt.sign({
                        id : user.id,
                        name : user.name,
                        email : user.email,
                    },process.env.ACCESS_TOKEN_SECRET,
                    {expiresIn : 3600},

                    (err,token) => {
                        if(err) throw err;
                        return res.status(200).json({
                            message : "Registered Successfully",
                            token : token,
                            user : {
                                id : user.id,
                                name : user.name,
                                email : user.email
                            }
                        })
                    })

                })
            })
        })
        
    }catch(err){
        return res.status(500).json({message : "Error in registering account"})
    }
}

// Login User
module.exports.login = async(req, res) => {
    try{
        const { email, password } = req.body;
        let user = await User.findOne({email});

        if(!user){
            res.status(404).json({
                message : "User not found",
            })
        }

        bcrypt.compare(password, user.password)
        .then(isMatch => {
            if(!isMatch){
                return res.status(400).json({
                    message : "Password Incorrect",
                });
            }

            try{
                const token = jwt.sign({
                    id : user.id,
                    name : user.name,
                    email : user.email,
                },process.env.ACCESS_TOKEN_SECRET,
                {expiresIn : 3600})
                
                return res.status(200).json({
                    message : "Logged in Successfully",
                    token : token,
                    user : {
                        id : user.id,
                        name : user.name,
                        email : user.email
                    }
                })
            }catch(err){
                return res.status(400).json({
                    message : "Unable to login"
                })
            }
        })
    }catch(err){
        return res.status(500).json({
            message : "Error Logging in",
        })
    }
}


// Logout User
module.exports.logout = (req,res) => {
    req.session.destroy((err) => {
        if(err){
            console.log(err);
        }
        else{
            res.json({message : "User Logged out"});
        }
    })
}

// Check Auth
module.exports.checkAuth = (req, res) => {
    console.log(req);
    return res.json({message : "Session not found"});
}