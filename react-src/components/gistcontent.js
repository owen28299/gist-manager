const React = require('react');

const GistContent = React.createClass({
  render : function(){
    return (
      <div className="gistcontent">
        <h2>Gist Content</h2>
        <p>{this.props.content}</p>
      </div>
    )
  }
});

module.exports = GistContent;