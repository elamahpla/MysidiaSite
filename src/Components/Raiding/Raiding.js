import React from 'react';
import { Slider, Slide } from 'react-materialize';

const Raiding = () => (
  <div className="RaidingContainer">
    <h1 style={{textAlign: 'center', textDecoration: 'underline'}}>The Village Idiots</h1>
      <p className="RaidingText">The Village Idiots are a small group of FC members whose primary focus is clearing Savage content while trying to also have fun. While our primary focus is having fun, we also enjoy progressing on and killing bosses as they are available to us</p>
    <div className="Raiding">
      <Slider>
        <Slide
          src="https://s3-us-west-2.amazonaws.com/mystassets/trainboss.jpg"
          >
        </Slide>
        <Slide
          src="https://s3-us-west-2.amazonaws.com/mystassets/paintingboss.jpg">
        </Slide>
      </Slider>
    </div>
  </div>
);

export default Raiding;