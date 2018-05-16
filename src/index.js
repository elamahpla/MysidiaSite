import React from 'react';
import ReactDOM from 'react-dom';
import Mysidia from './Containers/Mysidia';
import Favicon from 'react-favicon';
import './Styles/styles.scss';
import 'normalize.css';

ReactDOM.render(
  <div>
    <Favicon url="https://s3-us-west-2.amazonaws.com/mystassets/favicon.png" />
    <Mysidia />
  </div>, document.getElementById('app'));

module.hot.accept();