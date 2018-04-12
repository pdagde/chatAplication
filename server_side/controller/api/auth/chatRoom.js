
var message = require('../../../server/chatMessage');


function createChatGroup(req,callback){  
	var chatGroup = new message();
  	chatGroup.groups = [{
		     		adminName : req.body.name,
		     		groupSubject : req.body.topics,
		     		adminEmail : req.body.email,
		     		adminProfile : req.body.url,
		     		groupCreatedTime : new Date()
		         }]
            
	chatGroup.save(function (err, savedGroup) {
		  message.find({},function(err,data){
        
		  	  callback.json(data);
		  })
		
	})
}

function findchatGroup(req,callback){
		  message.find({},function(err,data){
		  	  callback.json(data);
		  })
}

function loginUser(req,callback){
     var query = {
     	           menbarName :req.body.name,
                   membarEmail : req.body.email,
                   membarProfile : 'jhgjh',
                   messageTime : new Date
     }
message.find({},function(err,data){
		  	  data[0].groups[0].membarDetails.push(query);
              message.update({},{"$set" : {"groups":data[0].groups}},function(err,message){
              	
              	callback.json(data[0]);
              })  
		  })
}

function sendmessage(req,callback){
     var query = {
     	           menbarName :req.body.name,
                   membarEmail : req.body.email,
                   membarProfile : req.body.avtar,
                   messageTime : new Date,
                   messageContaint : req.body.message
     }
 
message.find({},function(err,data){
		  	  data[0].groups[0].chatDetails.unshift(query);
              message.update({},{"$set" : {"groups":data[0].groups}},function(err,message){
              	
              	callback.json(data[0]);
              })  
		  })
}

function setActiveUser(req,callback){
 message.find({},function(err,data){
      if(data[0]){
           data[0].groups[0].activeMenbar = req.body.name
          message.update({},{'$set' : { "groups" : data[0].groups}},function(err,responce){
            callback.json({});       
           })
      } 
      })   
}

module.exports.findchatGroup = findchatGroup;
module.exports.createChatGroup = createChatGroup;
module.exports.loginUser = loginUser;
module.exports.sendmessage = sendmessage;
module.exports.setActiveUser = setActiveUser;






