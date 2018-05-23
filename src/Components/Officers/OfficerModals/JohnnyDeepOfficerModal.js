import React from 'react';

const JohnnyDeepOfficerModal = (props) => (
  <div className="ModalText">
    <button 
      className="CloseModalButton" 
      onClick={props.onClick}
    >
    <h1>Hi, I'm Alice.</h1>
      <p>My real name as you may have guessed is Jacob. My two Favorite Final Fantasy Games are 2 and 7. I live in Colorado and have four children. I love to ride Flatland BMX and sometimes play a Pennywhistle. Though I prefer healing I can fill in for other roles when needed as well. </p>
    </button>
  </div>
);

export default JohnnyDeepOfficerModal;