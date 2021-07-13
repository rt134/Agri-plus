const express = require('express');
const User = require("../models/User");

// Register User
module.exports.register = async(req, res) => {
    const { name, email, password} = req.body;

    try{
        let user = await User.findOne({email});
        if(user){
            return res.status(200).json({
                message : "User already exists",
            })
        }

        user = new User({
            name,
            email,
            password,
        });
        await user.save();
        return res.status(200).json({
            message : "Registered Successfully",
        });
    }catch(err){
        res.status(500).json({message : "Error in registering account"})
    }
}

// Login User
module.exports.login = async(req, res) => {
    const { email, password } = req.body;
    try{
        let user = await User.findOne({email});

        if(!user){
            res.status(404).json({
                message : "User not found",
            })
        }
        console.log(user);

        if(password == user.password){
            console.log("password correct");
            const sessionUser = {email : user.email, name : user.name};
            console.log("password correct 1");
            req.session.user = sessionUser;
            console.log("password correct 2");
            res.status(200).json({
                message : "Logged in Sucessfully",
                sessionUser
            })
        }else{
            res.status(400).json({
                message : "Password Incorrect",
            })
        }
    }catch(err){
        res.status(500).json({
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
    res.json({message : "Session not found"});
}