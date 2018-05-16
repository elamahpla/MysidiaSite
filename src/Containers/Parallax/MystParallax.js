import React from 'react';
import { Parallax, Background } from 'react-parallax';
import Routes from '../Routes/Routes';
import DummyComponent from '../../Components/DummyComponent/DummyComponent';

const imageOne = 'https://i.imgur.com/TTnsXW6.png';
const imageTwo = 'https://i.imgur.com/pxarite.png';
const imageThree = 'https://i.imgur.com/zRdRC2x.jpg';
const imageFour = 'https://i.imgur.com/nigVlUE.jpg';

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
      {/* <DummyComponent /> */}
      {/* <div>
      <Parallax 
      bgImage={imageFour}
      strength={140}
      style={{height: '5vh'}}
    >
      <div 
        style={{height: '5%'}}
      >
      </div>
      </Parallax>
      </div> */}
  </div>
);
export default MystParallax;