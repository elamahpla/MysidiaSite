import React from 'react';

const JohnnyDeepOfficerModal = (props) => (
  <div className="ModalText">
    <button 
      className="CloseModalButton" 
      onClick={props.onClick}
    >
    <h1>Hi, I'm Johnny.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, aliquid autem illum est possimus consectetur? Quibusdam voluptatibus doloribus voluptate hic cumque tempora repellendus rem obcaecati?</p>
    </button>
  </div>
);

export default JohnnyDeepOfficerModal;