import React from 'react';

const About = () => (
  <div className="AboutContainer">
    <div className="About">
      <img
        src="https://s3-us-west-2.amazonaws.com/mystassets/homechoco.jpg" 
        alt="Final Fantasy 14, Mysidia, Myst, Free Company, FC, Chocobo, Cactuar, Casual FC, Friendly FC"
      />
      <p>
      Welcome to Mysidia! We're an FC on the Server Cactuar. We're a long-standing FC and are also one of the largest FC's on the Server.&nbsp;
      We try to help all members as much as we can, when we can. Since we're a large FC, we'd like everyone to help, but it's not required :) 
      </p>
    </div>
    <hr/>
  <div className="AboutMysidia">
    <h1>Why the name Mysidia?</h1>
    <p>Mysidia is a town in Final Fantasy IV. Mysidia is inhabited by wizards and is ruled by an Elder. It is the hometown of Palom and Porom, which is one end of Devil's Road and connects Baron with Mysidia. The Tower of Prayers is located in Mysidia which is where the Elder prays for those he cares about.</p>
    <img 
      src="https://static.wixstatic.com/media/21e8d8_87b08bffc80a411a9048504361d3a130~mv2.jpg/v1/fill/w_570,h_105,al_c,lg_1,q_80/21e8d8_87b08bffc80a411a9048504361d3a130~mv2.jpg" 
      alt="Final Fantasy 14, Mysidia, Myst, Free Company, FC, Chocobo, Cactuar, Casual FC, Friendly FC"
    />
  </div>
    <div className="DiscordContainer">
      <br/>
      <a href="https://discord.gg/Nu9sCJU" target="_blank">
        <img 
          className="Discord"
          src="https://s3-us-west-2.amazonaws.com/mystassets/Discord.png" 
          alt="Final Fantasy 14, Mysidia, Myst, Free Company, FC, Chocobo, Cactuar, Casual FC, Friendly FC, Friendly Free Company, Discord, FF14 Discord"
        />
      </a>
    </div>
  </div>
);

export default About;