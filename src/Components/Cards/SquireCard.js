import React from 'react';
import { Card, CardTitle } from 'react-materialize';

const SquireCard = () => (
  <div>
    <Card
      header={
      <CardTitle
        reveal 
        image={'http://via.placeholder.com/250x30'} 
        waves='light'
      />}
        title="Squire"
        className="CardRanks"
        style={{textAlign: 'center', height: '250px', width: '250px'}}
        reveal={<p>This rank is for people who are new to the FC. Please feel free to ask for help if and when it's needed.
          </p>}>
    </Card>
  </div>
);

export default SquireCard;