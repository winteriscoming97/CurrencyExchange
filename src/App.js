import React from 'react';
import logo from './logo.svg';
import './App.css';
import Conversion from './Conversion';
import Footer from './Footer';
import Form from './Form';
import Nav from './Nav';
import Table from './Table';

function App() {
  return (
    <div className="App">
        <Nav />
        <Form />
        <Conversion />
        <Table />
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
    </div>
  );
}

export default App;
