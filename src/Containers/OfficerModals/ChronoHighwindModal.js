import React, { Component } from 'react';
import Modal from 'react-modal';
import ChronoHighwindOfficerModal from '../../Components/Officers/OfficerModals/ChronoHighwindOfficerModal';

class ChronoHighwindModal extends Component {
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
          Chrono Highwind
        </button>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="ChronoHighwind"
          onRequestClose={this.handleCloseModal}
          className="AliceModal"
          overlayClassName="Overlay"
        >
        <div>
          <ChronoHighwindOfficerModal
            onClick={this.handleCloseModal}
            className="CloseModalButton"
          />
        </div>
        </Modal>
      </div>
    );
  }
};

export default ChronoHighwindModal;