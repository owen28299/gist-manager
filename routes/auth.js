'use strict';

const express             = require('express'),
      router              = express.Router(),
      passport            = require('passport'),
      queryString         = require('querystring'),
      ensureAuthenticated = require('../middleware/ensureAuthenticated')
      ;

router.route("/github")
  .get(
    passport.authenticate('github', { scope: [ 'gist' ] }),
    function(req, res){
      // The request will be redirected to GitHub for authentication, so this
      // function will not be called.
    });

router.route("/github/callback")
  .get(
    passport.authenticate('github', { failureRedirect: '/' }),
    function(req, res) {

      var data = queryString.stringify({
        accessToken : req.user.accessToken,
        id : req.user.id,
        username : req.user.username
      });

      res.redirect('/?' + data);
    });

router.route("/user")
  .get(ensureAuthenticated, function(req, res){
    res.json(req.user);
  });

router.route("/logout")
  .get(function(req, res) {
      req.logout();
      res.send('Successfully logged out');
    });

module.exports = router;