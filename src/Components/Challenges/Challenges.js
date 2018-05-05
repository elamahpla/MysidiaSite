import React from 'react';
import { Card, CardTitle, Col } from 'react-materialize';

const Challenges = () => (
  <div className="ChallengesContainer">
    <div className="ChallengeOne">
      <Col m={7} s={12}>
        <Card
          className="CardOne" 
          horizontal 
          header={<CardTitle 
          image="http://via.placeholder.com/400x75">
        </CardTitle>}>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nam eveniet soluta iste quos voluptatibus quisquam numquam nisi perferendis laborum, veniam et, deleniti necessitatibus! Eligendi quae odit dolorum exercitationem necessitatibus culpa, hic non nobis fugiat quam tempora tempore eaque magnam asperiores molestias? Corrupti, reiciendis praesentium officia provident esse vitae harum! Possimus perspiciatis dignissimos officia. Aspernatur id quaerat corporis quasi illum iste aliquam, minima debitis quia error, facere cum! Laborum doloremque dolore magni nam totam sit!</p>
        </Card>
      </Col>
    </div>
  <div className="ChallengeTwo">
    <Col m={7} s={12}>
        <Card
          className="CardOne" 
          horizontal 
          header={<CardTitle 
          image="http://via.placeholder.com/400x75">
        </CardTitle>}>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nam eveniet soluta iste quos voluptatibus quisquam numquam nisi perferendis laborum, veniam et, deleniti necessitatibus! Eligendi quae odit dolorum exercitationem necessitatibus culpa, hic non nobis fugiat quam tempora tempore eaque magnam asperiores molestias? Corrupti, reiciendis praesentium officia provident esse vitae harum! Possimus perspiciatis dignissimos officia. Aspernatur id quaerat corporis quasi illum iste aliquam, minima debitis quia error, facere cum! Laborum doloremque dolore magni nam totam sit!</p>
        </Card>
      </Col>
    </div>
  </div>
);

export default Challenges;