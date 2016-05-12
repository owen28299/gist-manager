var React = require('react');
var ReactDOM = require('react-dom');

var GistManagerPage = React.createClass({
  render : function(){
    return (
      <div class="mainPage">
        <h1>Welcome to Gist-Manager</h1>
      </div>
    )
  }
})


ReactDOM.render(
  <GistManagerPage />,
  document.getElementById('content')
);