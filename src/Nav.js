import React from 'react';
import './Nav.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container navbar">
        <div className="row">
          <div className="nav-logo"></div>
          <h2 className="nav-title">This is the navbar</h2>
        </div>

      </div>
    )
  }

};
export default Nav;
