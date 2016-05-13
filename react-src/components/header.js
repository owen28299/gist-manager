const React = require('react');

const Header = React.createClass({
  render : function(){
    return (
      <div className="gistheader">
        <h1>Welcome to Gist-Manager</h1>
        <h2>Welcome: {this.state.username}</h2>
        <button>Create New Gist</button>
      </div>
    )
  }
});

module.exports = Header;