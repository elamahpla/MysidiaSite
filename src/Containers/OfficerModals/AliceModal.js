import React, { Component } from 'react';
import Modal from 'react-modal';
import AliceOfficerModal from '../../Components/Officers/OfficerModals/AliceOfficerModal';
import { Button } from 'react-materialize';

class AliceModal extends Component {
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
          href="https://na.finalfantasyxiv.com/lodestone/character/16698127/" 
          target="_blank">
          <img 
            className="ModalImage" 
            src="https://s3-us-west-2.amazonaws.com/mystassets/alicemodal.png" 
            alt="Alice Whitethorn, Officer, FF14, Mysidia, Myst, Final Fantasy 14, Free Company, Free Company Website, Cactuar"/>
        </a>
        <Button
          waves='light'
          className="ButtonModalOpen"
          onClick={this.handleOpenModal}
        >
          Alice
        </Button>
        <Modal
          onRequestClose={this.handleCloseModal}
          isOpen={this.state.showModal}
          contentLabel="Alice"
          className="AliceModal"
          overlayClassName="Overlay"
          contentLabel="Modal For Alice."
        >
        <div>
          <AliceOfficerModal
            className="CloseModalButton"
            onClick={this.handleCloseModal} />
        </div>
        </Modal>
      </div>
    );
  }
};

export default AliceModal;