import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from "./Box";  // Note that when importing other components, we don't need the .tsx extension

function App() {
  let count = 0;

  const handleClick = () => {
    // TODO: update count correctly
    count += 1;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          That's a nice spinny thing. 
        </p>
        <div className="flex-center">
          <button onClick={handleClick}>Increment</button>
          <span>
            Count: {count}
          </span>
        </div>
        {/* INSERT BOX HERE */}
      </header>
    </div>
  );
}

export default App;
