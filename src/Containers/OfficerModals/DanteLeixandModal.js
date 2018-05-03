import React, { Component } from 'react';
import Modal from 'react-modal';
import DanteLiexandOfficerModal from '../../Components/Officers/OfficerModals/DanteLiexandOfficerModal';

class DanteLeixandModal extends Component {
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
          Dante Leixand
        </button>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="DanteLeixand"
          onRequestClose={this.handleCloseModal}
          className="AliceModal"
          overlayClassName="Overlay"
        >
        <div>
          <DanteLiexandOfficerModal />
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

export default DanteLeixandModal;