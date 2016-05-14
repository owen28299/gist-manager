const React = require('react');

const LandingPage = React.createClass({
  logIn : function(){
    window.location = '/auth/github';
  },
  render : function(){
    var user = JSON.parse(localStorage.getItem('user'));
    return (
      <div className="landingpage">
        <h1>Gist Manager Landing Page</h1>
        <button onClick={this.logIn}>Log In Via GitHub</button>
      </div>
    )
  }
});

module.exports = LandingPage;