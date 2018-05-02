import React from 'react';
import { Card, CardTitle } from 'react-materialize';

const BaronCard = () => (
  <div>
    <Card
      header={
      <CardTitle
        reveal 
        image={'http://via.placeholder.com/250x30'} 
        waves='light'
      />}
        title="Barton"
        className="CardRanks"
        style={{textAlign: 'center', height: '250px', width: '250px'}}
        reveal={<p>To become a Baron, you must have Three Jobs at max level. This can be a combination of any of the following three: Crafting, Gathering, and Combat.
        </p>}>
    </Card>
  </div>
);

export default BaronCard;