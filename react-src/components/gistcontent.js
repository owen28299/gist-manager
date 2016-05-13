const React    = require('react'),
      EditGist = require('./editgist')
      ;

const GistContent = React.createClass({
  getInitialState : function(){
    return {
      editMode : false
    }
  },
  toggleEditMode : function(){
    if(this.state.editMode === false){
      this.setState({editMode : true})
    }
    else {
      this.setState({editMode : false})
    }
  },
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

    if(filesArray.length > 0 && this.state.editMode === false){
      var viewMode = (
        <div>
          <button onClick={this.toggleEditMode}>Edit This Gist</button>
          {filesArray}
        </div>
      )
    }

    if(this.state.editMode === true){
      var editMode = (
      <div>
        <button onClick={this.toggleEditMode}>Cancel</button>
        <EditGist />
      </div>
      )
    }

    return (
      <div className="gistcontent">
        <h2>Gist Content</h2>
          {viewMode}
          {editMode}
      </div>
    )
  }
});

module.exports = GistContent;