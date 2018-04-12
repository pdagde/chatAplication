
'use strict';

var pizza = require("./server_side/controller/api/auth/pizza.js");
module.exports.register = function(router){

 
 router.route('/pizza/allPizz').post(pizza.allPizz);
 router.route('/pizza/newpostorder').post(pizza.newpostorder);
 router.route('/pizza/createChatGroup').post(pizza.createChatGroup);
router.route('/pizza/findchatGroup').post(pizza.findchatGroup);
router.route('/pizza/loginUser').post(pizza.loginUser);
router.route('/pizza/sendmessage').post(pizza.sendmessage);

router.route('/pizza/setActiveUser').post(pizza.setActiveUser);


  console.log('routes registered..!');
};

