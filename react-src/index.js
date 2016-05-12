const React          = require('react'),
      ReactDOM       = require('react-dom'),
      GistList       = require('./components/gistlist'),
      GistContent    = require('./components/gistcontent')
      ;

//look at ES6 class declarations
const GistManagerPage = React.createClass({
  getInitialState: function(){
    return {
      id : "",
      username : "",
      accessToken : ""
    }
  },
  loadUserData: function(){
    var user = JSON.parse(localStorage.getItem('user'));
    this.setState({id : user.id});
    this.setState({username : user.username});
    this.setState({accessToken : user.accessToken});
  },
  loadUserGists: function(){
    console.log("loading....")
  },
  componentDidMount: function(){
    this.loadUserData();
    this.loadUserGists();
  },
  render : function(){
    return (
      <div className="mainPage">
        <h1>Welcome to Gist-Manager</h1>
        <h2>Welcome: {this.state.username}</h2>
        <p>id : {this.state.id}</p>
        <p>accessToken : {this.state.accessToken}</p>
        <GistList list="List Item From Above"/>
        <GistContent content="Content From Above"/>
      </div>
    )
  }
})


function urlQuery(fields){
  fields = (fields.substring(1));
  fields = fields.split("&");
  fields = fields.map(function(element){
    return element.split("=");
  })

  var fieldsObj = {};

  fields.forEach(function(element){
    fieldsObj[element[0]] = decodeURIComponent(element[1]);
  })

  return fieldsObj;
}



if(window.location.search.length > 15){
  var userData = urlQuery(window.location.search);
  localStorage.setItem('user', JSON.stringify(userData));
  window.location = "/";
}

ReactDOM.render(
  <GistManagerPage />,
  document.getElementById('content')
);