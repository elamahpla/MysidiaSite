import React from 'react';
import { Card, CardTitle } from 'react-materialize';

const OfficerCard = () => (
  <div>
    <Card
      header={
      <CardTitle
        style={{height: '21.5vh'}}
        reveal 
        image={'https://s3-us-west-2.amazonaws.com/mystransandofficers/officer.jpg'} 
        waves='light'
      />}
        title="Officer"
        className="CardRanks"
        style={{textAlign: 'center', height: '250px', width: '250px'}}
        reveal={<p>To become an Officer, you must first prove that you are reliable and are able to maintain a high level of conduct. All Officers are expected to resolve any disputes that arise, as well as Kick, Promote, and Demote members as needed.
          </p>}>
    </Card>
  </div>
);

export default OfficerCard;