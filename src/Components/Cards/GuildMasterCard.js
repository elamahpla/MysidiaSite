import React from 'react';
import { Card, CardTitle } from 'react-materialize';

const GuildMasterCard = () => (
  <div>
    <Card
      header={
      <CardTitle
        className="CardTitle"
        reveal 
        image={'https://s3-us-west-2.amazonaws.com/mystassets/guildmaster.jpg'}
        waves='light'
      />}
        title="GM"
        className="CardRanks"
        reveal={<p>The GM must be able to lead the FC. Which inlude: Recruiting, Dismissing, and Pugging for people when needed. S/He will ensure the Officers are on task and promote the health and growth of the FC.</p>}>
    </Card>
  </div>
);

export default GuildMasterCard;