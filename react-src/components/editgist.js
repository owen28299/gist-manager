const React = require('react');

const EditGist = React.createClass({
  getInitialState : function() {
    var files = this.props.files;
    var file = files.files[Object.keys(files.files)[0]];

    return {
      description : files.description,
      filename : file.filename,
      content : file.content,
      id : files.id,
      originalFileName : file.filename
    };
  },
  handleSubmit : function(event){
    var user = JSON.parse(localStorage.getItem('user'));
    event.preventDefault();

    var newGist = {
      description : this.state.description,
      files : {}
    }

    newGist.files[this.state.originalFileName] = {
      content : this.state.content,
      filename : this.state.filename
    }

    console.log(newGist);

    var newReq = new XMLHttpRequest();
    newReq.addEventListener('load', function(){
      console.log(this)
    });
    newReq.open('PATCH', "https://api.github.com/gists/" + this.state.id);
    newReq.setRequestHeader("Authorization", "token " + user.accessToken);
    newReq.send(JSON.stringify(newGist));

  },
  handleDescriptionChange : function(event){
    this.setState({description : event.target.value})
  },
  handleFileNameChange : function(event){
    this.setState({filename : event.target.value})
  },
  handleContentChange : function(event){
    this.setState({content : event.target.value})
  },
  render : function(){
    return (
      <div className="Edit Gist">
        <h2>Edit Gist</h2>
        <form onSubmit={this.handleSubmit}>
          <p>Gist Title:</p>
          <input
            type="text"
            placeholder="Gist Title"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          />
          <p>Gist Filename:</p>
          <input
            type="text"
            placeholder="Gist Filename"
            value={this.state.filename}
            onChange={this.handleFileNameChange}
          />
          <p>Content:</p>
          <input
            type="text"
            placeholder="Gist Title"
            value={this.state.content}
            onChange={this.handleContentChange}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
});

module.exports = EditGist;