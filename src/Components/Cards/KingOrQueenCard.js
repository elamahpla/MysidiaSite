import React from 'react';
import { Card, CardTitle } from 'react-materialize';

const KingOrQueenCard = () => (
  <div>
    <Card
      header={
      <CardTitle
        reveal 
        image={'http://via.placeholder.com/250x30'} 
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