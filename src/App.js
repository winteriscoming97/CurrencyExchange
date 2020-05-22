import React from 'react';
import Nav from './Nav';
import Form from './Form';
import Table from './Table';
import Footer from './Footer';
import checkStatus from './utils';
import './App.css';

//tried to cache requests
const InitialState = {
  someState: 'a'
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = localStorage.getItem("appState") ? JSON.parse(localStorage.getItem("appState")) : InitialState;
    this.state = {
      rates: null,
      baseFrom: '',
    }
    this.changeBaseFrom = this.changeBaseFrom.bind(this);
  }

  //App fetches the data and delays the render until completed

    componentDidMount() {
      this.loadData();
    }

    loadData() {
      fetch("https://alt-exchange-rate.herokuapp.com/latest")
      .then(checkStatus)
      .then((data) => {
        this.setState({
          rates: data.rates,
          baseFrom: data.base,
        })
        console.log(this.state);

      }).catch((error) => {
        console.log(error);
      })
    }

    changeBaseFrom(base) {
      fetch('https://alt-exchange-rate.herokuapp.com/latest?base=' + base)
      .then(checkStatus)
      .then((data) => {
        this.setState({
          rates: data.rates,
          baseFrom: data.base,
        })
        console.log(this.state);

      }).catch((error) => {
        console.log(error);
      })
    }

    componentWillUnmount() {
  // Remember state for the next mount
  localStorage.setItem('appState', JSON.stringify(this.state));
}

  render () {
    if (!this.state.rates) {
            return <div />
        }
    const {rates, baseFrom} = this.state;
    rates[baseFrom] = 1.000;
    return (
    <div className="App">
        <Nav />
        <Form rates={rates} baseFrom={baseFrom} changeBaseFrom={this.changeBaseFrom} />
        <Table rates={rates} baseFrom={baseFrom} />
        <Footer />
    </div>
  );
}
}

export default App;
