const React    = require('react'),
      GistList = require('./gistlist');

const DashBoard = React.createClass({
  getInitialState: function(){
    return {
      id : "",
      username : "",
      accessToken : "",
      gists : []
    }
  },
  loadUserData: function(){
    var user = JSON.parse(localStorage.getItem('user'));
    this.setState({id : user.id});
    this.setState({username : user.username});
    this.setState({accessToken : user.accessToken});

    var that = this;

    var gistReq = new XMLHttpRequest();
    gistReq.addEventListener('load', function(){
      that.setState({gists : JSON.parse(this.responseText)});
    });
    gistReq.open('GET', "https://api.github.com/users/" + user.username + "/gists");
    gistReq.setRequestHeader("Authorization", "token " + user.accessToken);
    gistReq.send();
  },
  componentDidMount: function(){
    this.loadUserData();
  },
  render : function(){
    return (
      <div className="mainPage">
        <a href="/creategist">Create New Gist</a>
        <GistList list={this.state.gists}/>
      </div>
    )
  }
})

module.exports = DashBoard;