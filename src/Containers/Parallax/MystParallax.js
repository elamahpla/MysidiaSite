import React from 'react';
import { Parallax, Background } from 'react-parallax';
import Routes from '../Routes/Routes';

const imageTwo = 'https://i.imgur.com/pxarite.png';
const imageThree = 'https://i.imgur.com/zRdRC2x.jpg';

const MystParallax = () => (
  <div>
    <Parallax 
      bgImage={imageThree}
      strength={170}
      style={{height: '115vh'}}>
      <div style={{height: '10%'}}>
      <img src={imageTwo} />
      </div>
      <div>
        <Routes />
      </div>
      </Parallax>
  </div>
);
export default MystParallax;