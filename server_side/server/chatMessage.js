var mongoose = require('mongoose');

var schema = new mongoose.Schema({
       groups : [{
                 adminName : {type : String},
                 adminEmail : {type : String},
                 groupSubject : {type : String},
                 adminProfile : { type : String},
                 groupCreatedTime : Date,
                 chatDetails : [{
                                    menbarName : {type : String},
                                    membarEmail : { type : String},
                                    membarProfile : {type : String},
                                    messageTime : Date,
                                    messageContaint : {type : String}
                               }],
                  membarDetails :[{
                                    menbarName : {type : String},
                                    membarEmail : { type : String},
                                    membarProfile : {type : String},
                                    messageTime : Date
                               }]                

                 }]
})

module.exports = mongoose.model('chatMessage',schema);
