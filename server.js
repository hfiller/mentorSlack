var request = require("request");
var express = require("express");
var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
var object = {
  client_id: "4098180171.4151359858"
}
var Slack = require('slack-node');

apiToken = "7822857132be7254bff8078f2722d6c8";

slack = new Slack(apiToken);

slack.api("users.list", function(err, response) {
  console.log(response);
});

slack.api('chat.postMessage', {
  text:'hello from nodejs',
  channel:'#general'
}, function(err, response){
  console.log(response);
});
