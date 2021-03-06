const React = require('react');

document.body.addEventListener('touchmove', function (ev) {
  ev.preventDefault();
});

const LandingPage = React.createClass({
  logIn : function(){
    window.location = '/auth/github';
  },
  render : function(){
    var user = JSON.parse(localStorage.getItem('user'));
    return (
      <div className="landingpage">
        <div className="landingbody">
          <h1>React Gist Manager</h1>
          <p>Gist management at your fingertips</p>
          <button onClick={this.logIn}>Login with GitHub</button>
        </div>
        <div className="landingfooter">
          <p>
            © 2016 Owen Yang |
            <a href="https://github.com/owen28299"> Github</a> |
            <a href="https://www.linkedin.com/in/owen-yang-755b5124?trk=nav_responsive_tab_profile_pic"> LinkedIn</a>
          </p>
        </div>
      </div>
    )
  }
});

module.exports = LandingPage;