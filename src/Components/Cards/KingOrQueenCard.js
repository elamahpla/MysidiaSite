import React from 'react';
import { Card, CardTitle } from 'react-materialize';

const HighBorn = () => (
  <div>
    <Card
      header={
      <CardTitle
        className="CardTitle"
        reveal 
        image={'https://s3-us-west-2.amazonaws.com/mystassets/kingorqueen.jpg'}
        waves='light'
      />}
        title="Viscount"
        className="CardRanks"
        reveal={<p>To become a Viscount you must have all Combat, Gathering, and Crafting jobs at max level.
          </p>}>
    </Card>
  </div>
);

export default HighBorn;