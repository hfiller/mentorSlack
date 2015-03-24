var request = require("request");
var express = require("express");
var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
var object = {
  client_id: "4098180171.4151359858"
}
var Slack = require('passport-slack');
var CLIENT_ID = "4098180171.4151359858";
var CLIENT_SECRET = "7822857132be7254bff8078f2722d6c8"
passport.use(new SlackStrategy({
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ SlackId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
))
