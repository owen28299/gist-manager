const React = require('react');

const GistList = React.createClass({

  findGist : function(event){
    console.log(event.target.id);
  },
  render : function(){

  var that = this;

  var childNodes = this.props.list.map(function(element){

    var description = element.description || "Untitled";

    return (
      <p id={element.url} onClick={that.findGist} key={element.id}>
        {description}
      </p>
    )
  });

    return (
      <div className="gistlist">
        <h2>Gist List</h2>
        {childNodes}
      </div>
    )
  }
});

module.exports = GistList;