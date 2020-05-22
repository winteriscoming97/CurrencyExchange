import React from 'react';
import './Table.css';

//table data is filled via loop
function Table (props) {
  const { rates } = props;
    return(
      <div className="container">
        <div className="table-head floating-box">
          <h2>Base Conversion Table</h2>
        </div>
        <table>
          <thead>
            <tr>
            <th className="left">Country</th>
            <th className="right">Difference from Base</th>
            </tr>
          </thead>
          <tbody>
          {Object.keys(rates).map(function (country, index) {
            return (
              <tr key={index}>
              <td key={index + 1} className="left">{country}</td>
              <td key={index + 2} className="right">{rates[country]}</td>
              </tr>
            )
          })
          }

          </tbody>
        </table>
      </div>
    )
  }

export default Table;
