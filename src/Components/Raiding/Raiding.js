import React from 'react';
import { Slider, Slide, Tab, Tabs } from 'react-materialize';
import { Jumbotron } from 'react-bootstrap';

const Raiding = () => (
  <div className="RaidingContainer">
    <Jumbotron>
      <Tabs style={{color: 'white'}} className='testing'>
        <Tab active title="Who are We?">
          <div className="TabsList">
            We are The Village Idiots. The primary raiding group of the FC. Our name was a unanimous decision amongst the raiding members.
          </div>
        </Tab>
        <Tab title="What do we do?">
          <div className="TabsList">
            We kill raid bosses! Ranging from current savage bosses, to older savage bosses.
          </div>
        </Tab>
        <Tab title="Who's in this group?">
          <div className="TabsList">
            The people in this group are a small group of individuals from the FC. Mostly comprised of longer term members.
          </div>
        </Tab>
        <Tab title="Who can join?">
          <div className="TabsList">
            Right now, our roster is actually oversized! So we currently aren't taking anyone else on. But people are more than welcome to make another group for the same purpose.
          </div>
        </Tab>
      </Tabs>
    <Slider indicators={false} className="RaidingImages">
      <Slide src="https://s3-us-west-2.amazonaws.com/mystassets/trainboss.jpg"></Slide>
      <Slide src="https://s3-us-west-2.amazonaws.com/mystassets/paintingboss.jpg"></Slide>
    </Slider>
  </Jumbotron>
</div>
);

export default Raiding;