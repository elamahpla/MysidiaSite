import React, { Component } from 'react';
import Home from '../../Components/Home/Home';
import About from '../../Components/About/About';
import Officers from '../../Components/Officers/Officers';
import MyHeader from '../../Components/StickyHeader/MyHeader';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
        <MyHeader />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/officers" component={Officers} />
          </Switch>
        </div>
    </Router>
    );
  }
};

export default Routes;