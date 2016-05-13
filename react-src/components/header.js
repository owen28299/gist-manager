const React = require('react');

const Header = React.createClass({
  render : function(){
    var user = JSON.parse(localStorage.getItem('user'));
    return (
      <div className="gistheader">
        <h1>Welcome to Gist-Manager</h1>
        <h2>Welcome: {user.username}</h2>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Header;