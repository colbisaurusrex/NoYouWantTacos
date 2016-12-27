import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//this is a class based component
class SearchBar extends Component{

    constructor(props){
      super(props)
    }

    handleInputChange(event){
      console.log(event.target.value)
    }

    render(){
      return (
        <input onChange={this.handleInputChange}/>
      )
    }
};

export default SearchBar;
