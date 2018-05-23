import React from 'react';
import { Button, Icon } from 'react-materialize';
import { Well } from 'react-bootstrap';

const Contact = () => (
  <div className="ContactContainer">
    <div className="Contact">
      <Well>
        Like what you see? Contact me here: <br/><br/>
        <a 
          href="mailto:joeyrobinsondev@gmail.com" 
          target="_blank">
        <Button 
          waves='light' 
          className="ContactButton">
          Email
        </Button>
        </a>
      </Well>
    </div>
  </div>
);

export default Contact;