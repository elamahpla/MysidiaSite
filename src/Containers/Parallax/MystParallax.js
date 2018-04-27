import React from 'react';
import { Parallax, Background } from 'react-parallax';
import Routes from '../Routes/Routes';

const imageOne = 'https://i.imgur.com/QAPamX7.jpg';
const imageTwo = 'https://i.imgur.com/qH1AKdx.jpg';
const imageThree = 'https://i.imgur.com/qH1AKdx.jpg';

const MystParallax = () => (
  <div>
    <Parallax bgImage={imageTwo}
      strength={500}>
      <div style={{height: 500}}>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, omnis qui, ipsa veniam aspernatur earum adipisci, rem corporis quo maiores dicta consectetur unde odit numquam facere. Corporis praesentium temporibus cum quasi impedit voluptatibus repellendus iure quod eius totam alias ratione ipsam quos, nemo, quibusdam blanditiis possimus eum, illo debitis. Officiis adipisci error illum, veniam fugit eaque laudantium, dicta eum nisi assumenda molestias. Illo omnis error, voluptatem eligendi, enim voluptatibus iure corrupti cum culpa quis adipisci quam reprehenderit corporis quia temporibus. Rem ex, illum tenetur laboriosam dolor culpa molestiae aperiam fugit iste adipisci commodi maxime error sapiente, repellat eius omnis. Voluptatem.</div>
      </div>
    </Parallax>
    <Routes />
    <Parallax bgImage={imageOne}
      strength={500}>
      <div style={{height: 500}}>
        <div>HTML inside the parallax</div>
      </div>
    </Parallax>
    <Parallax bgImage={imageThree}
      strength={500}>
      <div style={{height: 500}}>
        <div>HTML inside the parallax</div>
      </div>
    </Parallax>
    <div style={{height: 250}}>
      </div>
  </div>
);
export default MystParallax;