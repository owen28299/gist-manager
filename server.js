'use strict';

const express        = require('express'),
      app            = express(),
      PORT           = process.env.PORT || 3000,
      passport       = require('passport'),
      session        = require('express-session'),
      GitHubStrategy = require('passport-github2').Strategy,
      partials       = require('express-partials')
      ;

app.use(express.static('public'));

app.listen(PORT, function(){
  console.log(`Server listening on port: ${PORT}`);
});