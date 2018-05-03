import React from 'react';
import { Card, CardTitle } from 'react-materialize';

const BaronCard = () => (
  <div>
    <Card
      header={
      <CardTitle
        style={{height: '21.5vh'}}
        reveal 
        image={'https://s3-us-west-2.amazonaws.com/mystransandofficers/baron.jpg'} 
        waves='light'
      />}
        title="Baron"
        className="CardRanks"
        style={{textAlign: 'center', height: '250px', width: '250px'}}
        reveal={<p>To become a Baron, you must have Three Jobs at max level. This can be a combination of any of the following three: Crafting, Gathering, and Combat.
        </p>}>
    </Card>
  </div>
);

export default BaronCard;