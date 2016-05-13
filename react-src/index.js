const React          = require('react'),
      ReactDOM       = require('react-dom'),
      GistList       = require('./components/gistlist'),
      CreateGist     = require('./components/creategist'),
      Header         = require('./components/header')
      ;

const ReactRouter = require('react-router')
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const Link = ReactRouter.Link;
const browserHistory = ReactRouter.browserHistory;


//look at ES6 class declarations
const GistManagerPage = React.createClass({
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

if(localStorage.getItem('user')) {
  ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={Header}>
        <IndexRoute component={GistManagerPage}></IndexRoute>
        <Route path="creategist" component={CreateGist}></Route>
      </Route>
    </Router>,
    document.getElementById('content')
  );
}
else {
  window.location = "/auth/github"
}
