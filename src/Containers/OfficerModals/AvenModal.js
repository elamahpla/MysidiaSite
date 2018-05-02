import React, { Component } from 'react';
import Modal from 'react-modal';
import AvenOfficerModal from '../../Components/Officers/OfficerModals/AvenOfficerModal';

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
        <button
          className="ButtonModalOpen"
          onClick={this.handleOpenModal}
        >
          Aven
        </button>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Aven"
          onRequestClose={this.handleCloseModal}
          className="AvenModal"
          overlayClassName="Overlay"
        >
        <div>
          <AvenOfficerModal />
          <button 
            onRequestClose={this.handleCloseModal}
            className="ButtonModalClose">Close</button>
        </div>
        </Modal>
      </div>
    );
  }
};

export default AvenModal;