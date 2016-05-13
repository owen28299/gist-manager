const React       = require('react'),
      GistContent = require('./gistcontent')
      ;

const GistList = React.createClass({
  getInitialState: function(){
    return {
      gist : {}
    }
  },
  findGist : function(event){
    var user = JSON.parse(localStorage.getItem('user'));
    var that = this;

    var gistReq = new XMLHttpRequest();
    gistReq.addEventListener('load', function(){
      that.setState({gist : JSON.parse(this.responseText)});
    });
    gistReq.open('GET', event.target.id);
    gistReq.setRequestHeader("Authorization", "token " + user.accessToken);
    gistReq.send();
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
        <button>Create New Gist</button>
        <div className="gists">
          {childNodes}
        </div>
        <GistContent content={this.state.gist}/>
      </div>
    )
  }
});

module.exports = GistList;