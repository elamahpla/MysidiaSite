import React from 'react';
import { Card, CardTitle } from 'react-materialize';

const OfficerCard = () => (
  <div>
    <Card
      header={
      <CardTitle
        className="CardTitle"
        reveal 
        image={'https://s3-us-west-2.amazonaws.com/mystassets/officer.jpg'}
        waves='light'
      />}
        title="Officer"
        className="CardRanks"
        reveal={<p>To become an Officer, you must first prove that you are reliable and are able to maintain a high level of conduct. All Officers are expected to resolve any disputes that arise, as well as Kick, Promote, and Demote members as needed.
          </p>}>
    </Card>
  </div>
);

export default OfficerCard;