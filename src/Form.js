import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      baseTo: null,
      result: 0,


    }
    this.changeBase = this.changeBase.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
}

componentDidMount() {
  this.setState({
    baseTo: Object.keys(this.props.rates)[0],
  })
}

handleSwitch() {
  let prevBase = this.props.baseFrom;
  this.props.changeBaseFrom(this.state.baseTo);
  this.setState({
    baseTo: prevBase,
    result: 0
  })
}

handleInput(event) {
  if (event.target.value !== ''){
    this.setState({
      result: (event.target.value * this.props.rates[this.state.baseTo])
    })

  }
  else {
    this.setState({
        result: 0
    })
  }
}

//handles select value changes
changeBase(event) {
  if (event.target.name === 'baseFrom'){
    this.props.changeBaseFrom(event.target.value);
    this.setState({
      result: 0
    })
  }
  else {
    this.setState({
      baseTo: event.target.value,
      result: 0
    })

  }
}


  render() {
    if (!this.state.baseTo) {
      return <div > </div>
    }
    const { baseTo, result } = this.state;
    const { baseFrom, rates } =this.props;

    //list generation for select options. base is added to the end of the list
    return (
      <div className="row">
        <form>
        <select name="baseFrom" className="btn" onChange={this.changeBase} value={ baseFrom }>

        {Object.keys(rates).map(function(country, index) {
          return (
            <option key={index} value={country}>{country}</option>
          )
        })}

        </select>
          <input type="number" name="input" placeholder="Enter Number Here..." onKeyUp={this.handleInput}/>

          <select name="baseTo" className="btn" onChange={this.changeBase} value={ baseTo }>

          {Object.keys(rates).map(function(country, index) {
              return (
                <option key={index} value={country}>{country}</option>
              )
            })}

          </select>
          <button type="button" className="btn" onClick={this.handleSwitch}><i className="fas fa-exchange-alt" ></i></button>
        </form>
        <h1 id="Converted">{result}</h1>
      </div>
    )
  }
}

export default Form;
