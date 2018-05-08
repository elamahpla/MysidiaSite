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
      strength={170}
      style={{height: '100vh'}}>
      <div style={{height: '5%'}}>
      <img src={imageTwo} />
      </div>
      <div>
        <Routes />
      </div>
      </Parallax>
      <DummyComponent />
      <Parallax 
      bgImage={imageThree}
      strength={170}
      style={{height: '100vh'}}
    >
      <div 
        style={{height: '5%'}}
      >
      <img 
        src={imageTwo} 
      />
      </div>
      </Parallax>
  </div>
);
export default MystParallax;