import React from 'react';
import './Form.css';


//this has the majority of complex tasks
class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: (0).toFixed(4),

    }
    this.changeBase = this.changeBase.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.handleCalculation = this.handleCalculation.bind(this);
}

//switch button passes value to App's base
handleSwitch() {
  this.props.switchBase();
  this.handleCalculation(1);
}

//Calculation
handleInput(event) {
  if (event.target.value !== ''){
    this.setState({
      result: (event.target.value * this.props.rates[this.props.baseTo]).toFixed(4)
    })

  }
  else {
    this.setState({
        result: (0).toFixed(4)
    })
  }
}


handleCalculation(stateNum, value) {
  const { result } = this.state
  const { rates, baseTo, baseFrom } = this.props
  if (stateNum === 1) {
    this.setState({
      result: ((result / rates[baseTo]) * (rates[baseFrom] / rates[baseTo])).toFixed(4)
    })
  }
  else if (stateNum === 2) {
    this.setState({
      result: ((result / rates[baseFrom]) / rates[value]).toFixed(4)
    })
  }
  else {
    this.setState({
      result: ((result / rates[baseTo]) * rates[value]).toFixed(4)
    })
  }
}


//handles select value changes
changeBase(event) {
  if (event.target.name === 'baseFrom'){
    this.props.changeBaseFrom(event.target.value);
    this.handleCalculation(2, event.target.value);

  }
  else {
    this.props.changeBaseTo(event.target.value);
    this.handleCalculation(3, event.target.value);

  }
}


  render() {
    if (!this.props.baseTo) {
      return <div > </div>
    }
    const { result } = this.state;
    const { baseFrom, rates, baseTo } =this.props;

    //list generation for select options. base is added to the end of the list
    return (
      <div className="row">
        <form>
        <label>Base:</label>
        <select name="baseFrom" className="btn" onChange={this.changeBase} value={ baseFrom }>

        {Object.keys(rates).map(function(country, index) {
          return (
            <option key={index} value={country}>{country}</option>
          )
        })}

        </select>
          <input type="number" name="input" placeholder="Enter Number Here..." onKeyUp={this.handleInput}/>
          <label>Convert To:</label>
          <select name="baseTo" className="btn" onChange={this.changeBase} value={ baseTo }>

          {Object.keys(rates).map(function(country, index) {
              return (
                <option key={index} value={country}>{country}</option>
              )
            })}

          </select>
          <button type="button" className="btn" id="Switch" onClick={this.handleSwitch}><i className="fas fa-exchange-alt" ></i></button>
        </form>
        <h1 id="Converted">{result}</h1>
      </div>
    )
  }
}

export default Form;
