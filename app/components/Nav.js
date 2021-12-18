import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <nav className='navbar'>
        <h1 className='logo-title'><a className='nav-link' href='/'>The Burger Center</a></h1>
        <ul>
          <li><a className='nav-link' href="">Home</a></li>
          <li><a href="#about" className='nav-link'>About Us</a></li>
          <li><a href="" className='nav-link'>Menu</a></li>
          <li><a href="" className='nav-link'>Contact Us</a></li>
        </ul>
      </nav>
    )
  }
}
