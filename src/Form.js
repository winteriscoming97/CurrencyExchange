import React from 'react';
import Table from './Table';
import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      baseTo: props.baseFrom,
      result: 0,


    }
    this.changeBase = this.changeBase.bind(this);
    this.handleInput = this.handleInput.bind(this);
}

componentDidMount() {
  this.setState({
    baseTo: 'ggg',
  })
  console.log(this.props);
}



handleInput(event) {
  if (event.target.value !== ''){
    this.setState({
      result: (event.target.value * this.state.rates[this.state.baseTo]).toFixed(7)
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
    this.setState({
      baseFrom: event.target.value,
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
    const { baseTo, result } = this.state;
    const { baseFrom, rates } =this.props;
    //list generation for select options. base is added to the end of the list
    return (
      <div className="row">
        <form>
        <select name="baseFrom" className="btn" onChange={this.changeBase} value={ baseFrom }>

        </select>
          <input type="number" name="input" placeholder="Enter Number Here..." onKeyUp={this.handleInput}/>

          <select name="baseTo" className="btn" onChange={this.changeBase} value={ baseTo }>

          </select>
        </form>
        <h1 id="Converted">{result}</h1>
      </div>
    )
  }
}
//selection option component


export default Form;
