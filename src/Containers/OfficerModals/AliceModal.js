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
  }
  handleCloseModal = () => {
    this.setState({showModal: false});
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
          isOpen={this.state.showModal}
          contentLabel="Alice"
          onRequestClose={this.handleCloseModal}
          className="AliceModal"
          overlayClassName="Overlay"
        >
        <div>
          <AliceOfficerModal />
          <button 
            onClick={this.handleCloseModal}
            className="ButtonModalClose">
            Close
          </button>
        </div>
        </Modal>
      </div>
    );
  }
};

export default AliceModal;