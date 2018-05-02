import React from 'react';
import { Card, CardTitle } from 'react-materialize';

const LordCard = () => (
  <div>
    <Card
      header={
      <CardTitle
        reveal 
        image={'http://via.placeholder.com/250x30'} 
        waves='light'
      />}
        title="Lord"
        className="CardRanks"
        style={{textAlign: 'center', height: '250px', width: '250px'}}
        reveal={<p>To become a Lord, you must have Ten Jobs at max level. This includes the following: Crafting, Gathering, and Combat.
          </p>}>
    </Card>
  </div>
);

export default LordCard;