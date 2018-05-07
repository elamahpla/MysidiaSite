import React from 'react';
import { Card, CardTitle } from 'react-materialize';

const BaronCard = () => (
  <div>
    <Card
      header={
      <CardTitle
        className="CardTitle"
        reveal 
        image={'https://s3-us-west-2.amazonaws.com/mystassets/baron.jpg'}
        waves='light'
      />}
        title="Baron"
        className="CardRanks"
        reveal={<p>To become a Baron, you must have Three Jobs at max level. This can be a combination of any of the following three: Crafting, Gathering, and Combat.
        </p>}>
    </Card>
  </div>
);

export default BaronCard;