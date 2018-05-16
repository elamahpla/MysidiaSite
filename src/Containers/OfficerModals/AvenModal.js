import React, { Component } from 'react';
import Modal from 'react-modal';
import AvenOfficerModal from '../../Components/Officers/OfficerModals/AvenOfficerModal';
import { Button } from 'react-materialize';

class AvenModal extends Component {
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
          href="https://na.finalfantasyxiv.com/lodestone/character/10478406/" 
          target="_blank">
          <img 
            className="ModalImage" 
            src="https://s3-us-west-2.amazonaws.com/mystassets/avenmodal.jpg" 
            alt="Aven Ein'sof, Officer, FF14, Mysidia, Myst, Final Fantasy 14, Free Company, Free Company Website, Cactuar"
          />
        </a>
        <Button
          waves='light'
          className="ButtonModalOpen"
          onClick={this.handleOpenModal}
        >
          Aven
        </Button>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Aven"
          onRequestClose={this.handleCloseModal}
          className="AliceModal"
          overlayClassName="Overlay"
        >
        <div>
          <AvenOfficerModal />
          <button
            onClick={this.handleCloseModal}
            onRequestClose={this.handleCloseModal}
            className="ButtonModalClose">
            Close
          </button>
        </div>
        </Modal>
      </div>
    );
  }
};

export default AvenModal;