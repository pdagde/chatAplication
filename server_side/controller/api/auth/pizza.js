
var message = require('../../../server/chatMessage');



function createChatGroup(req,callback){
	var chatGroup = new message();
  	chatGroup.groups = [{
		     		adminName : "pravin",
		     		groupSubject : "jshdgfhjsdf",
		     		adminEmail : "jshdgfhjsdf",
		     		adminProfile : "skjdhfjkshjdfsd",
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
console.log("WWWWWWWWWWW",JSON.stringify(req.body))
     var query = {
     	           menbarName :req.body.name,
                   membarEmail : req.body.email,
                   membarProfile : req.body.avtar,
                   messageTime : new Date,
                   messageContaint : req.body.message
     }
 



message.find({},function(err,data){
		  	  data[0].groups[0].chatDetails.push(query);
              message.update({},{"$set" : {"groups":data[0].groups}},function(err,message){
              	console.log("WWWWWWWWWWW",JSON.stringify(data[0]))
              	callback.json(data[0]);
              })  
		  })
}


// proofingPhoto.update(query,{"$push":{"like.name":req.body.name}





var pizza = require('../../../server/pizza');
var file = require('../../../server/order.json');
var orderjson = require('../../../server/order');
var jsonfile = require('jsonfile')
var fs = require('fs');




function allPizz(req,res){
   res.json(pizza);
}

function newpostorder(req,res){
  
   orderjson.push(req.body);
var json = JSON.stringify(orderjson);

fs.writeFile("server_side/server/order.json",json, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
   res.json(pizza);
}
 

module.exports.newpostorder = newpostorder;
module.exports.allPizz = allPizz;

module.exports.findchatGroup = findchatGroup;
module.exports.createChatGroup = createChatGroup;
module.exports.loginUser = loginUser;
module.exports.sendmessage = sendmessage;






