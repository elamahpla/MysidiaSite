import React from 'react';

const AuroraOfficerModal = (props) => (
  <div className="ModalText">
    <button 
      className="CloseModalButton" 
      onClick={props.onClick}
    >
    <h1>Hi, I'm Aurora.</h1>
      <p>I don't talk much in game and do tend to stay to myself but I do enjoy running content and I am willing to help out anyone who asks. I prefer healing but am at least decent at most of the classes and can help out as whatever role is needed at the time. When I am not running dungeons I am usually crafting/gathering or working on some random achievement, whatever is catching my attention at the time. When I have some free time but don't feel like playing this game I tend to play a wide variety of games on multiple different systems depending on what I am in the mood for at the time.</p>
    </button>
  </div>
);

export default AuroraOfficerModal;