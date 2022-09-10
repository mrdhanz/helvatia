import React from 'react';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <img src="/logo512.png" className="App-logo" alt="logo" />
          <p>
            Welcome to Helvatia!
          </p>
          <p>
            Coming soon...
          </p>
          <a className='App-link' href='https://github.com/mrdhanz/helvatia'>
            Github Repository
          </a>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            This project is powered by React
          </a>
        </header>
      </div>
    </React.Fragment>
  );
}

export default App;
