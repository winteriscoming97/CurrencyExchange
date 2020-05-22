import React from 'react';
import Nav from './Nav';
import Form from './Form';
import Table from './Table';
import Footer from './Footer';
import Chart from 'chart.js';
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
      baseTo: '',
    }
    this.changeBaseFrom = this.changeBaseFrom.bind(this);
    this.changeBaseTo = this.changeBaseTo.bind(this);
    this.switchBase = this.switchBase.bind(this);
    this.chartRef = React.createRef();

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
          baseTo: Object.keys(data.rates)[0]
        })
        console.log(this.state);
        this.getHistoricalRates(data.base, Object.keys(data.rates)[0]);

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
        this.getHistoricalRates(this.state.baseFrom, this.state.baseTo);

      }).catch((error) => {
        console.log(error);
      })
    }

    changeBaseTo(base) {
      fetch('https://alt-exchange-rate.herokuapp.com/latest?base=' + this.state.baseFrom)
      .then(checkStatus)
      .then((data) => {
        this.setState({
          rates: data.rates,
          baseFrom: data.base,
          baseTo: base
        })
        console.log(this.state);
        this.getHistoricalRates(this.state.baseFrom, this.state.baseTo);

      }).catch((error) => {
        console.log(error);
      })
    }

    switchBase() {
      fetch('https://alt-exchange-rate.herokuapp.com/latest?base=' + this.state.baseTo)
      .then(checkStatus)
      .then((data) => {
        this.setState({
          rates: data.rates,
          baseFrom: data.base,
          baseTo: this.state.baseFrom
        })
        console.log(this.state);
        this.getHistoricalRates(this.state.baseFrom, this.state.baseTo);

      }).catch((error) => {
        console.log(error);
      })
    }


    getHistoricalRates = (base, quote) => {
    const endDate = new Date().toISOString().split('T')[0];
    const startDate = new Date((new Date()).getTime() - (30 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0];
    fetch(`https://alt-exchange-rate.herokuapp.com/history?start_at=${startDate}&end_at=${endDate}&base=${base}&symbols=${quote}`)
      .then(checkStatus)
      .then(data => {
        if (data.error) {
          throw new Error(data.error);
        }
        const chartLabels = Object.keys(data.rates);
        const chartData = Object.values(data.rates).map(rate => rate[quote]);
        const chartLabel = `${base}/${quote}`;
        this.buildChart(chartLabels, chartData, chartLabel);
      })
      .catch(error => console.error(error.message));
  }

  buildChart = (labels, data, label) => {
    if (typeof this.chart !== "undefined") {
      this.chart.destroy();
    }
    this.chart = new Chart(this.chartRef.current.getContext("2d"), {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: label,
            data,
            fill: false,
            tension: 0,
          }
        ]
      },
      options: {
        responsive: true,
      }
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
    const {rates, baseFrom, baseTo} = this.state;
    rates[baseFrom] = 1.000;

    return (
    <div className="App">
        <Nav />
        <Form rates={rates} baseFrom={baseFrom} changeBaseFrom={this.changeBaseFrom} baseTo={baseTo} changeBaseTo={this.changeBaseTo} switchBase={this.switchBase}/>
        <Table rates={rates} baseFrom={baseFrom} />
        <canvas ref={this.chartRef} />
        <Footer />
    </div>
  );
}
}

export default App;
