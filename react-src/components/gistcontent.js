const React = require('react');

const GistContent = React.createClass({
  render : function(){
    var files = (this.props.content.files);
    var filesArray = [];

    for (var file in files){
      if(files.hasOwnProperty(file)){
        filesArray.push(files[file]);
      }
    }

    filesArray = filesArray.map(function(element){
      return (
        <div key={element.raw_url}>
          <h3>{element.filename}</h3>
          <p>{element.content}</p>
        </div>
      )
    });

    if(filesArray.length > 0){
      var editLink = (<a href="/editgist">Edit This Gist</a>)
    }

    return (
      <div className="gistcontent">
        <h2>Gist Content</h2>
        {editLink}
        {filesArray}
      </div>
    )
  }
});

module.exports = GistContent;