/**
 * Created by Pravin on 29/03/2018.
 */
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







