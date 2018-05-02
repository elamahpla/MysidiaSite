import React, { Component } from 'react';
import Modal from 'react-modal';
import AliceOfficerModal from '../../Components/Officers/OfficerModals/AliceOfficerModal';

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
        <button
          className="ButtonModalOpen"
          onClick={this.handleOpenModal}
        >
          Alice
        </button>
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