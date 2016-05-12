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
    var user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
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


function urlQuery(fields){
  fields = (fields.substring(1));
  fields = fields.split("&");
  fields = fields.map(function(element){
    return element.split("=");
  })

  var fieldsObj = {};

  fields.forEach(function(element){
    fieldsObj[element[0]] = element[1];
  })

  return fieldsObj;
}

if(window.location.search){
  var userData = urlQuery(window.location.search);
  localStorage.setItem('user', JSON.stringify(userData));
}

ReactDOM.render(
  <GistManagerPage />,
  document.getElementById('content')
);