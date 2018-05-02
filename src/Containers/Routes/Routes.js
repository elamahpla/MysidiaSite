import React, { Component } from 'react';
import Home from '../../Components/Home/Home';
import Officers from '../../Components/Officers/Officers';
import Ranks from '../../Components/Ranks/Ranks';
import Raiding from '../../Components/Raiding/Raiding';
import Challenges from '../../Components/Challenges/Challenges';
import Events from '../../Components/Events/Events';
import Housing from '../../Components/Housing/Housing';
import Calendar from '../../Components/Calendar/Calendar';
import Rules from '../../Components/Rules/Rules';
import MyHeader from '../../Components/StickyHeader/MyHeader';
import About from '../../Components/About/About';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
        <MyHeader />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/officers" component={Officers} />
            <Route path="/ranks" component={Ranks} />
            <Route path="/raiding" component={Raiding} />
            <Route path="/challenges" component={Challenges} />
            <Route path="/events" component={Events} />
            <Route path="/housing" component={Housing} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/rules" component={Rules} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
    </Router>
    );
  }
};

export default Routes;