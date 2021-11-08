const router = require("express").Router();
const User = require("../models/userModel");
const Message = require("../models/messageModel");
const Conversation = require("../models/conversationModel");
const auth = require("../middleware/auth");

router.get("/get", auth, async (req, res) => {
    let from =  req.query.from;
    let to = req.query.to;
    try{
        const conversation = await Conversation.findOne({
            members : { $in:[from && to] }
        })
        
        if(!conversation){
            const newConv = new Conversation({
                members : [from,to],
            });

            try{
                const savedConversation = await newConv.save();
                return res.status(200).json(savedConversation);
            }catch(err){
                return res.status(200).json(conversation);
            }
        }else{
            return res.status(200).json(conversation);
        }

    }catch (err){
        return res.status(500).json(err);
    }
})

router.post("/message",auth, async(req,res) => {

    const newMessage = new Message(req.body);

    try {
        const savedMessage = await newMessage.save();
        return res.status(200).json(savedMessage);
    }catch (err){
        return res.status(500).json(err);
    }
})

router.get("/message/:id", auth, async(req,res) => {
    try {
        const message = await Message.find({
            connversationId : req.params.id,
        });
        return res.status(200).json(message);
    }catch (err){
        res.status(500).json({
            message : "Server error"
        });
    }
})


module.exports = router;
