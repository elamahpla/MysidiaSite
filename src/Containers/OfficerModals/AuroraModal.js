import React, { Component } from 'react';
import Modal from 'react-modal';
import AuroraOfficerModal from '../../Components/Officers/OfficerModals/AuroraOfficerModal';

class AuroraModal extends Component {
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
          Aurora
        </button>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Aven"
          onRequestClose={this.handleCloseModal}
          className="AuroraModal"
          overlayClassName="Overlay"
        >
        <div>
          <AuroraOfficerModal />
          <button 
            onRequestClose={this.handleCloseModal}
            className="ButtonModalClose">Close</button>
        </div>
        </Modal>
      </div>
    );
  }
};

export default AuroraModal;