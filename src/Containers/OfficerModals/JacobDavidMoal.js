import React, { Component } from 'react';
import Modal from 'react-modal';
import JacobDavidOfficerModal from '../../Components/Officers/OfficerModals/JacobDavidOfficerModal';

class JacobDavidModal extends Component {
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
          Jacob
        </button>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Alice"
          onRequestClose={this.handleCloseModal}
          className="AliceModal"
          overlayClassName="Overlay"
        >
        <div>
          <JacobDavidOfficerModal />
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

export default JacobDavidModal;