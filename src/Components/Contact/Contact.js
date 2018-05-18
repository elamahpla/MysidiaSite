import React from 'react';
import { Button, Icon } from 'react-materialize';
import { Well } from 'react-bootstrap';

const Contact = () => (
  <div className="ContactContainer">
    <div className="Contact">
      <Well>
        Like what you see? Contact me here: <br/><br/>
        <Button
          className="ContactButton" 
          waves='light'>Email
        </Button>
      </Well>
    </div>
  </div>
);

export default Contact;