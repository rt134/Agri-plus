const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    
    connversationId : {
        type : String,
        required: true,
    },
    sender : {
        type : String,
        required: true,
    },
    text : {
        type : String,
    }
},

{timestamps : true}

);

module.exports = mongoose.model('Message', messageSchema);