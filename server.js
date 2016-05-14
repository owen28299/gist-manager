'use strict';

const express        = require('express'),
      app            = express(),
      PORT           = process.env.PORT || 3000,
      passport       = require('passport'),
      session        = require('express-session'),
      GitHubStrategy = require('passport-github2').Strategy,
      Github         = require('./githubfiles'),
      bodyParser     = require("body-parser"),
      authRoute      = require("./routes/auth")
      ;

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new GitHubStrategy({
    clientID: Github.GITHUB_CLIENT_ID,
    clientSecret: Github.GITHUB_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {

    profile.accessToken = accessToken;

    return done(null, profile);

  }
));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SECRET ||'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/public'));
app.use("/auth", authRoute);


app.get('*', function(req, res){
  res.sendFile('./public/index.html',
              {
                root  : __dirname
              });
});

app.listen(PORT, function(){
  console.log(`Server listening on port: ${PORT}`);
});

