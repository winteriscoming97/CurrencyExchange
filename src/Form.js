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
        <input type="text" />
        <button>To ( )</button>
      </form>
    )
  }
}

export default Form;
