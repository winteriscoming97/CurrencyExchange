import React from 'react';
import './Form.css';
import checkStatus from './utils'

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      baseFrom: '',
      baseTo: 'USD',
      rates: {},

    }


}

  componentDidMount() {fetch("https://alt-exchange-rate.herokuapp.com/latest")
  .then(checkStatus)
  .then((data) => {
    this.setState({
      rates: data.rates,
      baseFrom: data.base,
    })
    console.log(this.state.rates);

  }).catch((error) => {
    console.log(error);
  })
}


  render() {
    const { baseFrom, baseTo, rates } = this.state;
    return (
      <form>
      <select name="baseTo" className="btn">
        <option value={ baseFrom }>{ baseFrom }</option>
        {Object.keys(rates).map(function(country) {
          if (country !== baseTo && country !== baseFrom)
            {
            return <Option country={country} />
            }
            return null
          })
        }

      </select>
        <input type="number" placeholder="Enter Amount Here"/>
        <select name="baseTo" className="btn">
          <option value={ baseTo }>{ baseTo }</option>
          {Object.keys(rates).map(function(country){
            if (country !== baseTo && country !== baseFrom) {

             return <Option country={country} />
           }
           return null
        })}
          <option>EUR</option>
        </select>
      </form>
    )
  }
}

function Option(props) {
  return <option value={props.country}>{props.country}</option>
}

export default Form;
