import React from 'react';
import { Parallax, Background } from 'react-parallax';
import Routes from '../Routes/Routes';
import DummyComponent from '../../Components/DummyComponent/DummyComponent';

const imageOne = 'https://i.imgur.com/wlucGfB.jpg';
const imageTwo = 'https://i.imgur.com/61BsQ53.png';
const imageThree = 'https://i.imgur.com/61kRF4Z.jpg';
const imageFour = 'https://i.imgur.com/kALwnE9.jpg';
const imageFive = 'https://i.imgur.com/qWk1Efe.jpg';

const MystParallax = () => (
  <div>
    <Parallax 
      bgImage={imageFive}
      strength={300}
    >
      <div 
        style={{height: '1000px'}}
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
        <div 
          className="Alice"
        >
        fuck
        </div>
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