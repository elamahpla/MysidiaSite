import React from 'react';

const AliceOfficerModal = (props) => (
  <div className="ModalText">
    <button
      className="CloseModalButton" 
      onClick={props.onClick}
    >
    <h1>Hi, I'm Alice.</h1>
      <p> I live in Calgary, Canada with my Fiance and two doggos. I only have time in my life for one game, which is currently FFXIV. I enjoy computer programming, reading dystopia fiction, and watching supernatural TV dramas. My main focus in the game is to do a little bit of everything.</p>
    </button>
  </div>
);

export default AliceOfficerModal;