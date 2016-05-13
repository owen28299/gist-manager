const React = require('react');

const GistContent = React.createClass({
  render : function(){
    var files = Object.getOwnPropertyNames(this.props.content.files);

    return (
      <div className="gistcontent">
        <h2>Gist Content</h2>
        <h3>{this.props.content.description}</h3>
      </div>
    )
  }
});

module.exports = GistContent;