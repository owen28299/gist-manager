const React = require('react');

const NotFound = React.createClass({
  render : function(){
    var user = JSON.parse(localStorage.getItem('user'));
    return (
      <div className="404">
        <h1>404 NOT FOUND</h1>
      </div>
    )
  }
});

module.exports = NotFound;