import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/config">Config</Link>
        </li>
       
      </ul>
    </nav>
  );
}

export default Navigation;