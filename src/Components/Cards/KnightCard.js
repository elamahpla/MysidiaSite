import React from 'react';
import { Card, CardTitle } from 'react-materialize';

const KnightCard = () => (
  <div>
    <Card
      header={
      <CardTitle
        style={{height: '21.5vh'}}
        reveal 
        image={'https://s3-us-west-2.amazonaws.com/mystassets/knight.jpg'}
        waves='light'
      />}
        title="Knight"
        className="CardRanks"
        style={{textAlign: 'center', height: '250px', width: '250px'}}
        reveal={<p>Once you reach the max level, you can become a Knight. Becoming a Knight will allow you to access the FC chest and also grants you the ability to give out FC invites.
        </p>}>
    </Card>
  </div>
);

export default KnightCard;