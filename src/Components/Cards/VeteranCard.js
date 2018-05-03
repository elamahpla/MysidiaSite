import React from 'react';
import { Card, CardTitle } from 'react-materialize';

const VeteranCard = () => (
  <div>
    <Card
      header={
      <CardTitle
        style={{height: '21.5vh'}}
        reveal 
        image={'https://s3-us-west-2.amazonaws.com/mystassets/veteran.jpg'}
        waves='light'
      />}
        title="Veteran"
        className="CardRanks"
        style={{textAlign: 'center', height: '250px', width: '250px'}}
        reveal={<p>To become a Veteran, you must have been in the FC at least 6 months. All Veterans will be expected to have exceptional behavior and sure that the FC buffs are always up.
          </p>}>
    </Card>
  </div>
);

export default VeteranCard;