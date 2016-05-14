const React          = require('react'),
      ReactDOM       = require('react-dom'),
      DashBoard      = require('./components/dashboard'),
      CreateGist     = require('./components/creategist'),
      Header         = require('./components/header'),
      LandingPage    = require('./components/landingPage'),
      NotFound       = require('./components/404')
      ;

const ReactRouter    = require('react-router'),
      Router         = ReactRouter.Router,
      Route          = ReactRouter.Route,
      IndexRoute     = ReactRouter.IndexRoute,
      Link           = ReactRouter.Link,
      browserHistory = ReactRouter.browserHistory
      ;


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

if(!localStorage.getItem('user')){
  ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={LandingPage}></Route>
      <Route path="*" component={NotFound}></Route>
    </Router>,
    document.getElementById('content')
  )
}

else {
  ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={Header}>
        <IndexRoute component={DashBoard}></IndexRoute>
        <Route path="creategist" component={CreateGist}></Route>
        <Route path="*" component={NotFound}></Route>
      </Route>
    </Router>,
    document.getElementById('content')
  );
}
