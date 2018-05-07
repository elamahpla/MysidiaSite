import React from 'react';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import { NavLink } from 'react-router-dom';
import CollapsingHeader from '../../Containers/CollapsingHeader/CollapsingHeader';

const MyHeader = () => (
  <div id="outer-container">
    <CollapsingHeader />
  </div>
);

export default MyHeader;