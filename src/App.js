import React from 'react';
import Nav from './Nav';
import Form from './Form';
import Conversion from './Conversion';
import Table from './Table';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
        <Nav />
        <Form />
        <Conversion />
        <Table />
        <Footer />
    </div>
  );
}

export default App;
