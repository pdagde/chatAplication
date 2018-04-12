'use strict';
var chatRoom = require("./server_side/controller/api/auth/chatRoom.js");
module.exports.register = function(router){
router.route('/chatRoom/createChatGroup').post(chatRoom.createChatGroup);
router.route('/chatRoom/findchatGroup').post(chatRoom.findchatGroup);
router.route('/chatRoom/loginUser').post(chatRoom.loginUser);
router.route('/chatRoom/sendmessage').post(chatRoom.sendmessage);
router.route('/chatRoom/setActiveUser').post(chatRoom.setActiveUser);
console.log('routes registered..!');
};

