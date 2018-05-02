import React from 'react';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import { NavLink } from 'react-router-dom';

const MyHeader = () => (
  <StickyHeader
    header={
      <div className="HeaderRoot">
        <ul className="NavLinks">
          <li><NavLink activeStyle={{color: '#ebe7e7', background: '#03030f'}} style={{color: '#03030f'}} activeClassName="Links" exact to="/">Home</NavLink></li>  
          <li><NavLink activeStyle={{color: '#ebe7e7', background: '#03030f'}} style={{color: '#03030f'}} activeClassName="Links" to="/officers">Officers</NavLink></li>
          <li><NavLink activeStyle={{color: '#ebe7e7', background: '#03030f'}} style={{color: '#03030f'}} activeClassName="Links" to="/ranks">Ranks</NavLink></li>
          <li><NavLink activeStyle={{color: '#ebe7e7', background: '#03030f'}} style={{color: '#03030f'}} activeClassName="Links" to="/raiding">Raiding</NavLink></li>
          <li><NavLink activeStyle={{color: '#ebe7e7', background: '#03030f'}} style={{color: '#03030f'}} activeClassName="Links" to="/challenges">Challenges</NavLink></li>
          <li><NavLink activeStyle={{color: '#ebe7e7', background: '#03030f'}} style={{color: '#03030f'}} activeClassName="Links" to="/events">Events</NavLink></li>
          <li><NavLink activeStyle={{color: '#ebe7e7', background: '#03030f'}} style={{color: '#03030f'}} activeClassName="Links" to="/housing">Housing</NavLink></li>
          <li><NavLink activeStyle={{color: '#ebe7e7', background: '#03030f'}} style={{color: '#03030f'}} activeClassName="Links" to="/calendar">Calendar</NavLink></li>
          <li><NavLink activeStyle={{color: '#ebe7e7', background: '#03030f'}} style={{color: '#03030f'}} activeClassName="Links" to="/rules">Rules</NavLink></li>
          <li><NavLink activeStyle={{color: '#ebe7e7', background: '#03030f'}} style={{color: '#03030f'}} activeClassName="Links" to="/about">About</NavLink></li>  
        </ul>
      </div>
    }
  >
  </StickyHeader>
);

export default MyHeader;