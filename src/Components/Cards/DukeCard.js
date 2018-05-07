import React from 'react';
import { Card, CardTitle } from 'react-materialize';

const DukeCard = () => (
  <div>
    <Card
      header={
      <CardTitle
        className="CardTitle"
        reveal 
        image={'https://s3-us-west-2.amazonaws.com/mystassets/duke.jpg'}
        waves='light'
      />}
        title="Duke"
        className="CardRanks"
        reveal={<p>To become a Duke, you must have Five Jobs at max level. This includes the following: Crafting, Gathering, Combat.
          </p>}>
    </Card>
  </div>
);

export default DukeCard;