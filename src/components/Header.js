import React from 'react';
import {  Link } from 'react-router-dom';

function Header(props) {
  return (
      <div className='wrapper-header'>
        <div className='header'>
          <ul>
            <Link to='/'>
              <li>Home</li>
            </Link>
            <Link to='/about'>
              <li>About</li>
            </Link>
            <Link to='/contact'>
              <li>Contact</li>
          </Link>
          <li>
            Subscribe Movie ({ props.subscribe})
          </li>
          </ul>

          <ul>
            <Link to='/login'>
              <li>Login</li>
            </Link>
            <Link to='/register'>
              <li>Register</li>
            </Link>
          </ul>
        </div>
      </div>
  );
}

export default Header;
