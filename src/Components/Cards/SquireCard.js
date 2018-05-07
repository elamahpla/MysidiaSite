import React from 'react';
import { Card, CardTitle } from 'react-materialize';

const SquireCard = () => (
  <div>
    <Card
      header={
      <CardTitle
        className="CardTitle"
        reveal
        image={'https://s3-us-west-2.amazonaws.com/mystassets/squire.jpg'}
        waves='light'
      />}
        title="Squire"
        className="CardRanks"
        reveal={<p>This rank is for people who are new to the FC. Please feel free to ask for help if and when it's needed.
          </p>}>
    </Card>
  </div>
);

export default SquireCard;