const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ChannelSchema = new Schema({

    ChannelName : {
        type : String,
        required : true,
    },
    
    MatchId : {
        type : String,
        required : true,
    }

    ,
    linkchaine:{
        type : String,
        required : true,
    }
}, {timestamps : true})

const Channel = mongoose.model('Channel' , ChannelSchema);
module.exports = Channel;