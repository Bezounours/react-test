import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cardboard from "./components/cardboard/Cardboard";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Cardboard level="4"></Cardboard>
    </div>
  );
}

export default App;