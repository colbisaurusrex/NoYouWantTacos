var React = require("react");
//var DOM = require("react-dom")
var ReactDOM = require("react-DOM");

var App = () => {

  constructor(props){
    super(props)
  }


  render (){
    return (
      <div><HelloMessage {this.props.name}></div>
      )
  }

};

window.App = App;