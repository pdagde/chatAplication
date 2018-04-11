/**
 * Created by Pravin on 12/04/17.
 */

var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    fullName: {type : String},
    firstName: {type : String},
    lastName: {type : String},
    password : {type : String},
    signUp : Date,
    policy : {type: String, default:'Individual-profile', enum : ['Individual-profile','Organisation-profile']},
    email : {type : String, required: true}, 
    isverified : {type: Boolean, default:false},
    verificationCode: {type: Number},
    loginfrom : {type: String, default:'email', enum : ['email','facebook','google']},
    userStatus : {type: String, default:'active', enum : ['active','pending','blocked']},
    userType : [{type: String, default:'user', enum : ['admin','owner','user']}],
    Notes: {type : String},
    Bussiness : {type : String},
    ZipCode : {type: Number},
    Country : {type : String},
    Timezone : {type : String},
    avatar:{type : String},
    googleId:{type : String},
    facebookId : {type : String},
    accessToken:{ 
        google   : {type : String}, 
        facebook : {type : String}
    },
    createdNow : {type: Boolean, default:false},
})

module.exports = mongoose.model('user',schema);
