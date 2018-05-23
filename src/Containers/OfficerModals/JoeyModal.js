import React, { Component } from 'react';
import Modal from 'react-modal';
import JoeyOfficerModal from '../../Components/Officers/OfficerModals/JoeyOfficerModal';
import { Button } from 'react-materialize';

class JoeyModal extends Component {
  state = {
    showModal: false
  };
  handleOpenModal = () => {
    this.setState({showModal: true});
    const elements = document.getElementsByClassName('ButtonModalOpen')
    for (let i = 0; i < elements.length; i++) {
      elements[i].disabled = true
    }  
  }
  handleCloseModal = () => {
    this.setState({showModal: false});
    const elements = document.getElementsByClassName('ButtonModalOpen')
    for (let i = 0; i < elements.length; i++) {
    elements[i].disabled = false
    }
  }
  render() {
    return (
      <div>
        <a 
          href="https://na.finalfantasyxiv.com/lodestone/character/18595296/" 
          target="_blank">
          <img 
            className="ModalImage" 
            src="https://s3-us-west-2.amazonaws.com/mystassets/joeymodal.jpg" 
            alt="Joey Bear, Officer, FF14, Mysidia, Myst, Final Fantasy 14, Free Company, Free Company Website, Cactuar"
          />
        </a>
      <Button
        onClick={this.handleOpenModal} 
        className="ButtonModalOpen"
        waves='light' >
        JBear
      </Button>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Joey"
          onRequestClose={this.handleCloseModal}
          className="AliceModal"
          overlayClassName="Overlay"
        >
        <div>
          <JoeyOfficerModal 
            onClick={this.handleCloseModal}
            className="CloseButtonModal"
          />
        </div>
        </Modal>
      </div>
    );
  }
};

export default JoeyModal;