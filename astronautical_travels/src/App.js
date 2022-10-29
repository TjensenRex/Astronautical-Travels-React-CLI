import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('forecastResults'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
root.render(<p>THIS WAS RENDERED</p>);
export default App;
