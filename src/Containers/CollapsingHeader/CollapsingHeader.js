import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';

class CollapsingHeader extends React.Component {
  render () {
    return (
      <Menu className="bm-menu" isOpen={false}>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Menu>
    );
  }
}

export default CollapsingHeader;