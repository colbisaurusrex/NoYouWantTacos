import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/SearchBar.js';

//this is a functional component
const App = () => {
  return (
    <div>
    <SearchBar />
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById("hello"));