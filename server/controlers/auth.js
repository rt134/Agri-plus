const express = require('express');
const router = express.Router();
const User = require("../models/User");

// Register User
module.exports.register = async(req, res) => {
    const {name,email,password} = req.body;

    let user = await User.findOne({email});
    if(user){
        return res.json({
            message : "User already exists",
        })
    }

    user = new User({
        name,
        email,
        password,
    });
    await user.save();
    return res.json({
        message : "Registered Successfully",
    });
}

// Login User
module.exports.login = async(req, res) => {
    const {email, password} = req.body;
    let user = await User.findOne({email});
    if(!user){
        res.json({
            message : "User not found",
        })
    }

    if(password == user.password){
        // req.session.isAuth = true;
        res.json({
            message : "Logged in Sucessfully",
        })
    }else{
        res.json({
            message : "Password Incorrect",
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