import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props){
      super(props)

      this.state = {
        value: ''
      }
    }

    handleSearchInputChange(event){
      this.props.handleSearch(event.target.value)
      this.setState({
        value: event.target.value
      })
    }

    render(){
      return (
        <div className="centering">
          <input placeholder="Enter a food category"/>
          <input
            ref="query"
            value={this.state.value}
            onInput={this.handleSearchInputChange.bind(this)}
            placeholder="Enter any city"
            />
        </div>


      );
    }
};

export default SearchBar;
