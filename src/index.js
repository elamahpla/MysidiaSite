import React from 'react';
import ReactDOM from 'react-dom';
import Mysidia from './Containers/Mysidia';
import './Styles/styles.scss';
import 'normalize.css';

ReactDOM.render(<Mysidia />, document.getElementById('app'));

module.hot.accept();