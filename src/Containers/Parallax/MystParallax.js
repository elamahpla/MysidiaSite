import React from 'react';
import { Parallax, Background } from 'react-parallax';
import Routes from '../Routes/Routes';
import DummyComponent from '../../Components/DummyComponent/DummyComponent';

const imageOne = 'https://i.imgur.com/TTnsXW6.png';
const imageTwo = 'https://i.imgur.com/pxarite.png';
const imageThree = 'https://i.imgur.com/zRdRC2x.jpg';

const MystParallax = () => (
  <div>
    <Parallax 
      bgImage={imageThree}
      strength={150}
      style={{height: '100%'}}
    >
      <div 
        style={{height: '10%'}}
      >
      <img 
        src={imageTwo} 
      />
      </div>
      <div>
      <Routes />
      </div>
      </Parallax>
      <DummyComponent />
  </div>
);
export default MystParallax;