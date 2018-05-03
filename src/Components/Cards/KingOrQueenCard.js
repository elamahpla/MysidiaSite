import React from 'react';
import { Card, CardTitle } from 'react-materialize';

const KingOrQueenCard = () => (
  <div>
    <Card
      header={
      <CardTitle
        style={{height: '21.5vh'}}
        reveal 
        image={'https://s3-us-west-2.amazonaws.com/mystransandofficers/kingorqueen.jpg'} 
        waves='light'
      />}
        title="King/Queen"
        className="CardRanks"
        style={{textAlign: 'center', height: '250px', width: '250px'}}
        reveal={<p>To become a King/Queen you must have all Combat, Gathering, and Crafting jobs at max level.
          </p>}>
    </Card>
  </div>
);

export default KingOrQueenCard;