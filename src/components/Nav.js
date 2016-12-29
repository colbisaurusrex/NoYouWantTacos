import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar.js';

// needs to passed as param in Nav{handleUserInputChange}

// needs to be added to SearchBar tag handleSearchInputChange={handleSearchInputChange}
var Nav = () => (

      <nav>
        <div>
          <SearchBar />
        </div>
      </nav>

  );

export default Nav;