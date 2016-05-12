const React = require('react');

const GistList = React.createClass({
  render : function(){
    return (
      <div className="gistlist">
        <h2>Gist List</h2>
        <p>{this.props.list}</p>
      </div>
    )
  }
});

module.exports = GistList;