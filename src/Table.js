import React from 'react';
import './Table.css';

class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
        <h2>Base Conversion Table</h2>
        <button type="button" className="btn">Change Base</button>
        <table>
          <thead>
            <tr>
            <th>Country</th>
            <th>Difference from Base</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            

            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
export default Table;
