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
        <Footer />
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
