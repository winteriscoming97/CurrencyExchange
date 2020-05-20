import React from 'react';
import './Form.css';
import checkStatus from './utils'

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      baseFrom: 'EUR',
      baseTo: 'USD',
      Rates: [],

    }


}

  componentDidMount() {fetch("https://alt-exchange-rate.herokuapp.com/latest")
  .then(checkStatus)
  .then((data) => {
    console.log(data);
  }).catch((error) => {
    console.log(error);
  })
}

  render() {
    const { baseFrom, baseTo } = this.state;
    return (
      <form>
      <select name="baseTo" className="btn">
        <option>{ baseFrom }</option>
        <option>EUR</option>
      </select>
        <input type="number" placeholder="Enter Amount Here"/>
        <select name="baseTo" className="btn">
          <option value={ baseTo }>{ baseTo }</option>
          <option>USD</option>
        </select>
      </form>
    )
  }
}


export default Form;
