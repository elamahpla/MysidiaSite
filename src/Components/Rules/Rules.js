import React from 'react'
import { Jumbotron } from 'react-bootstrap';

const Rules = () => (
  <div>
    <Jumbotron className="RulesContainer">
      <div className="Rules">
        <ul>
          <li>
            <img
              className="RulesImages"
              src="https://s3-us-west-2.amazonaws.com/mystassets/favicon.png" 
              alt=""
            />
            FC chat needs to remain civil. No name calling, harassment, bullying, or belittling other members.
          </li>
          <hr/>
          <li>
            <img
              className="RulesImages"
              src="https://s3-us-west-2.amazonaws.com/mystassets/favicon.png" 
              alt=""
            />
            No coarse or offensive language in Discord. This includes directly or indirectly towards or about someone.
          </li>
          <hr/>
          <li>
            <img
              className="RulesImages"
              src="https://s3-us-west-2.amazonaws.com/mystassets/favicon.png" 
              alt=""
            />
          Treat others with respect and as you'd want to be treated.
          </li>
        </ul>
      </div>
    </Jumbotron>
  </div>
);

export default Rules;