const React = require('react');

const EditGist = React.createClass({
  getInitialState : function() {
    return {
      description : "",
      filename : "",
      content : "",
    };
  },
  handleSubmit : function(event){
    var user = JSON.parse(localStorage.getItem('user'));
    event.preventDefault();

    var newGist = {
      description : this.state.description,
      files : {}
    }

    var filename = this.state.filename + ".md";

    newGist.files[filename] = {
      content : this.state.content
    }

    var newReq = new XMLHttpRequest();
    newReq.addEventListener('load', function(){
      console.log(this)
    });
    newReq.open('POST', "https://api.github.com/gists");
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