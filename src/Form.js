import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form>
        <button type="button" className="btn" id="ConvertFrom">From ( )</button>
        <input type="number" placeholder="Enter Amount Here"/>
        <button type="button" className="btn" >To ( )</button>
      </form>
    )
  }
}

export default Form;
