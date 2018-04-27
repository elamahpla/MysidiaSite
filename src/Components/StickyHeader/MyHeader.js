import React from 'react';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import { NavLink } from 'react-router-dom';

const MyHeader = () => (
  <StickyHeader
    header={
      <div className="HeaderRoot">
        <ul className="NavLinks">
          <li><NavLink activeClassName="Links" exact to="/">Home</NavLink></li>  
          <li><NavLink activeClassName="Links" to="/about">About</NavLink></li>  
          <li><NavLink activeClassName="Links" to="/officers">Officers</NavLink></li>
          <li><NavLink activeClassName="Links" to="/officers">Officers</NavLink></li>
          <li><NavLink activeClassName="Links" to="/officers">Officers</NavLink></li>
          <li><NavLink activeClassName="Links" to="/officers">Officers</NavLink></li>
          <li><NavLink activeClassName="Links" to="/officers">Officers</NavLink></li>
          <li><NavLink activeClassName="Links" to="/officers">Officers</NavLink></li>
        </ul>
      </div>
    }
  >
  </StickyHeader>
);

export default MyHeader;