import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import HelloMessage from './components/HelloMessage.js';


//class based component
class App extends Component {

  constructor(props){
    super(props)
  }

  render (){
    return (
      <div> Hello {this.props.name}, this is a class based component</div>
      )
  }

};

export default App;