import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//this is a class based component. Used whenever we need to be aware of state.
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
         //this.setState triggers a re rendering in React.js
         //the value of the input is then changed after the handleInputChange is called. In this way, it is a controlled component and it is being told what its value is, instead of the other way around.
        <div>
          <p>Enter a food item, i.e. pasta</p>
          <input
            value={this.state.userInput}
            onChange={this.handleInputChange.bind(this)}/>
          <p>{this.state.userInput} isn't tacos</p>
        </div>


      );
    }
};

export default SearchBar;
