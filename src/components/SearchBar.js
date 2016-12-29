import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props){
      super(props)

      this.state = {
        value: ''
      }
    }

    //event handler
    handleSearchInputChange(event){
      //here is where we update state
      this.props.handleSearch(event.target.value)
      this.setState({
        value: event.target.value
      })
    }

    render(){
      return (
        <div className="centering">
          <p>Enter a city</p>
          <input
            value={this.state.value}
            onChange={this.handleSearchInputChange.bind(this)}/>
        </div>


      );
    }
};

export default SearchBar;
