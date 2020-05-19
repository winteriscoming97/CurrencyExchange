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
          <p>This is the navbar</p>
        </div>

      </div>
    )
  }

};
export default Nav;
