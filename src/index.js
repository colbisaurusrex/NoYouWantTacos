import React from 'react';
import ReactDOM from 'react-dom';

import HelloMessage from './components/HelloMessage.js';

//this is a functional component
const App = () => {
  return (
    <div>
    <HelloMessage name='Colby' />
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById("hello"));