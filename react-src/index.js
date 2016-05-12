const React          = require('react'),
      ReactDOM       = require('react-dom'),
      GistList       = require('./components/gistlist'),
      GistContent    = require('./components/gistcontent')
      ;


//look at ES6 class declarations
const GistManagerPage = React.createClass({
  getInitialState: function(){
    return {
      userData : "",
      accessToken : ""
    }
  },
  loadUserData: function(){
    var req = new XMLHttpRequest();
    req.addEventListener("load", function(response){
      console.log(response);
    })
    req.open("GET", "/user");
    req.send();
  },
  componentDidMount: function(){
    this.loadUserData();
  },
  render : function(){
    return (
      <div className="mainPage">
        <h1>Welcome to Gist-Manager</h1>
        <GistList list="List Item From Above"/>
        <GistContent content="Content From Above"/>
      </div>
    )
  }
})


ReactDOM.render(
  <GistManagerPage />,
  document.getElementById('content')
);