import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';

class CollapsingHeader extends Component {
  render () {
    return (
      <Menu className="bm-menu" isOpen={false}>
        <div>
          <ul className="NavLinks">
            <li><NavLink activeStyle={{color: '#03030f', background: '#ebe7e7'}} style={{color: '#ebe7e7', fontSize: '3rem'}} activeClassName="Links" exact to="/">Home</NavLink></li>  
            <li><NavLink activeStyle={{color: '#03030f', background: '#ebe7e7'}} style={{color: '#ebe7e7', fontSize: '3rem'}} activeClassName="Links" to="/officers">Officers</NavLink></li>
            <li><NavLink activeStyle={{color: '#03030f', background: '#ebe7e7'}} style={{color: '#ebe7e7', fontSize: '3rem'}} activeClassName="Links" to="/ranks">Ranks</NavLink></li>
            <li><NavLink activeStyle={{color: '#03030f', background: '#ebe7e7'}} style={{color: '#ebe7e7', fontSize: '3rem'}} activeClassName="Links" to="/raiding">Raiding</NavLink></li>
            <li><NavLink activeStyle={{color: '#03030f', background: '#ebe7e7'}} style={{color: '#ebe7e7', fontSize: '3rem'}} activeClassName="Links" to="/challenges">Challenges</NavLink></li>
            <li><NavLink activeStyle={{color: '#03030f', background: '#ebe7e7'}} style={{color: '#ebe7e7', fontSize: '3rem'}} activeClassName="Links" to="/events">Events</NavLink></li>
            <li><NavLink activeStyle={{color: '#03030f', background: '#ebe7e7'}} style={{color: '#ebe7e7', fontSize: '3rem'}} activeClassName="Links" to="/housing">Housing</NavLink></li>
            <li><NavLink activeStyle={{color: '#03030f', background: '#ebe7e7'}} style={{color: '#ebe7e7', fontSize: '3rem'}} activeClassName="Links" to="/calendar">Calendar</NavLink></li>
            <li><NavLink activeStyle={{color: '#03030f', background: '#ebe7e7'}} style={{color: '#ebe7e7', fontSize: '3rem'}} activeClassName="Links" to="/rules">Rules</NavLink></li>
            <li><NavLink activeStyle={{color: '#03030f', background: '#ebe7e7'}} style={{color: '#ebe7e7', fontSize: '3rem'}} activeClassName="Links" to="/about">About</NavLink></li>
            <li><NavLink activeStyle={{color: '#03030f', background: '#ebe7e7'}} style={{color: '#ebe7e7', fontSize: '3rem'}} activeClassName="Links" to="/contact">Contact</NavLink></li>
          </ul>
        </div>     
    </Menu>
    );
  }
}

export default CollapsingHeader;