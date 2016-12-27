import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends Component{

    constructor(props){
      super(props)
    }

    render(){
      return (
        <div>Hello {this.props.name}</div>
      )
    }
};

export default HelloMessage;
