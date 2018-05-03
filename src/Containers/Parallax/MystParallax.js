import React from 'react';
import { Parallax, Background } from 'react-parallax';
import Routes from '../Routes/Routes';
import DummyComponent from '../../Components/DummyComponent/DummyComponent';

const imageOne = 'https://i.imgur.com/TTnsXW6.png';
const imageTwo = 'https://i.imgur.com/pxarite.png';

const MystParallax = () => (
  <div>
    <Parallax 
      bgImage={imageOne}
      strength={150}
      style={{height: '100vh'}}
    >
      <div 
        style={{height: '10%'}}
      >
      <img 
        src={imageTwo} 
      />
      </div>
      <div>
      {/* <Parallax 
        bgImage={imageOne}
        strength={300}>
      <div 
        style={{
        height: '750px'}}
      >
      </div>
      </Parallax> */}
      <Routes />
      </div>
      </Parallax>
      <DummyComponent />
      {/* <Parallax 
        bgImage={imageOne}
        strength={300}>
      <div 
        style={{
          height: '300px', 
          width: '150px'}}
      >
      </div>
      </Parallax> */}
  </div>
);
export default MystParallax;