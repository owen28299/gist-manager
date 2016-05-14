const React = require('react');

const Header = React.createClass({
  logout: function(){
    var logoutReq = new XMLHttpRequest();
    logoutReq.addEventListener('load', function(){
      localStorage.removeItem('user');
      window.location = "/";
    });
    logoutReq.open('GET', "/auth/logout");
    logoutReq.send();
  },
  render : function(){
    var user = JSON.parse(localStorage.getItem('user'));
    return (
      <div className="gistheader">
        <h1>Welcome to Gist-Manager</h1>
        <button onClick={this.logout}>Logout</button>
        <h2>Welcome: {user.username}</h2>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Header;