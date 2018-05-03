import React from 'react';
import { Card, CardTitle } from 'react-materialize';

const RaidLeaderCard = () => (
  <div>
    <Card
      header={
      <CardTitle
        style={{height: '21.5vh'}}
        reveal 
        image={'https://s3-us-west-2.amazonaws.com/mystransandofficers/raidleader.jpg'} 
        waves='light'
      />}
        title="Raid Leader"
        className="CardRanks"
        style={{textAlign: 'center', height: '250px', width: '250px'}}
        reveal={<p>To become Raid Leader, you must first prove yourself reliable and example exceptional conduct. All Raid Leaders are expected to lead an FC raid team, resolve disputes when needed, and help teach unskilled members content when required.
          </p>}>
    </Card>
  </div>
);

export default RaidLeaderCard;