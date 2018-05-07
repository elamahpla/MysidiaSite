import React from 'react';
import { Card, CardTitle } from 'react-materialize';

const RaidLeaderCard = () => (
  <div>
    <Card
      header={
      <CardTitle
        className="CardTitle"
        reveal 
        image={'https://s3-us-west-2.amazonaws.com/mystassets/raidleader.jpg'}
        waves='light'
      />}
        title="Caesar"
        className="CardRanks"
        reveal={<p>To become Raid Leader, you must first prove yourself reliable and example exceptional conduct. All Raid Leaders are expected to lead an FC raid team, resolve disputes when needed, and help teach unskilled members content when required.
          </p>}>
    </Card>
  </div>
);

export default RaidLeaderCard;