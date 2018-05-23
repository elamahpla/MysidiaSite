import React from 'react';

const AvenOfficerModal = (props) => (
  <div className="ModalText">
    <button className="CloseModalButton" onClick={props.onClick}>
    <h1>Hi, I'm Aven.</h1>
      <p>Hi I'm Aven. I help organize social events for the FC and I play SMN. Please ask if you have any questions and feel free to drop by the fc house for a visit!</p>
    </button>
  </div>
);

export default AvenOfficerModal;