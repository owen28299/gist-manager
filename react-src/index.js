const React       = require('react'),
      ReactDOM    = require('react-dom'),
      GistList    = require('./components/gistlist'),
      GistContent = require('./components/gistcontent')
      ;

const GistManagerPage = React.createClass({
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