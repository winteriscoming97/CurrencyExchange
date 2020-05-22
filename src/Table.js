import React from 'react';
import './Table.css';

function Table (props) {
    return(
      <div className="container">
        <h2>Base Conversion Table</h2>
        <table>
          <thead>
            <tr>
            <th>Country</th>
            <th>Difference from Base</th>
            </tr>
          </thead>
          <tbody>
          

          </tbody>
        </table>
      </div>
    )
  }

export default Table;
