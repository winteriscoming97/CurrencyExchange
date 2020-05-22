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

//App fetches the data and delays the render until completed
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = localStorage.getItem("appState") ? JSON.parse(localStorage.getItem("appState")) : InitialState;
    this.state = {
      rates: null,
      baseFrom: 'fff',
    }

  }

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

    componentWillUnmount() {
  // Remember state for the next mount
  localStorage.setItem('appState', JSON.stringify(this.state));
}

  render () {
    if (!this.state.rates) {
            return <div />
        }
    const {rates, baseFrom} = this.state;
    return (
    <div className="App">
        <Nav />
        <Form rates={rates} baseFrom={baseFrom} />
        <Table />
        <Footer />
    </div>
  );
}
}

export default App;
