"use strict";

import React from 'react'
import NavLink from './controls/navLink'

export default React.createClass({
  render: function() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li>
            <NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/repos">Repos</NavLink>
          </li>
        </ul>

        {this.props.children}
      </div>
    );
  }
});
