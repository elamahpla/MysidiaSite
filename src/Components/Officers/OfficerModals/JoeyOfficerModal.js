import React from 'react';

const JoeyOfficerModal = (props) => (
  <div className="ModalText">
    <button className="CloseModalButton" onClick={props.onClick}>
    <h1>Hi, I'm Joey.</h1>
      <p>Hello. I'm supposed to fill this out, but I'm putting this here. No one will ever notice. I like raiding and gathering. If you need any help feel free to ask. Oh, I made this website. And I like the Lakshmi theme song a lot.</p>
    </button>
  </div>
);

export default JoeyOfficerModal;