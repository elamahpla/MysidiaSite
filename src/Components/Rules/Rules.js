import React from 'react';
import { Tab, Tabs } from 'react-materialize';
import { Jumbotron } from 'react-bootstrap';

const Rules = () => (
  <div className="RulesContainer">
    <Jumbotron>
      <Tabs style={{color: 'white'}} className='testing'>
        <Tab active title="Rule 1">
          <div className="TabsList">
            FC chat should remain civil. No name calling, harassment or belittling other members
          </div>
        </Tab>
        <Tab title="Rule 2">
          <div className="TabsList">
            No coarse language and sexual harassment/innuendo in FC chat, as well as in Discord. 
          </div>
        </Tab>
        <Tab title="Rule 3">
          <div className="TabsList">
            Similar to FC chat, refrain from offensive language of all forms in Discord, both chat and voice.
          </div>
        </Tab>
        <Tab title="Rule 4">
          <div className="TabsList">
            Treat others as you'd want to be treated. This means don't be rude to others :).
          </div>
        </Tab>
      </Tabs>
  </Jumbotron>
</div>
);

export default Rules;