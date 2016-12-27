import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//this is a class based component
class SearchBar extends Component{

    //all js classes have a function called constructor, it's the only one called automatically
    constructor(props){
      //but Component, the parent to SearcBar, also has a constructor function and if that is the one we want to call, we must call super()
      super(props)
      //state goes within the constructor call
      //only time we manipulate state in this way, this basically like instantiating it. From now on, we update. And we do that with this.setState.
      this.state = {userInput: ''}
    }

    //event handler
    handleInputChange(event){
      //here is where we update state
      this.setState({userInput: event.target.value});
    }

    render(){
      return (
         // onChange is an event listener
         //"this" loses context, so we have to bind it
        <div>
          <p>Enter a city and a food item, i.e. pasta</p>
          <input onChange={this.handleInputChange.bind(this)}/>
          <p>This isn't tacos: {this.state.userInput}</p>
        </div>


      );
    }
};

export default SearchBar;
