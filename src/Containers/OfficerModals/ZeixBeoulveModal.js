import React, { Component } from 'react';
import Modal from 'react-modal';
import ZeixBeoulveOfficerModal from '../../Components/Officers/OfficerModals/ZeixBeoulveOfficerModal';

class ZeixBeoulveModal extends Component {
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
          Zeix Beoulve
        </button>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="ColmArkus"
          onRequestClose={this.handleCloseModal}
          className="AliceModal"
          overlayClassName="Overlay"
        >
        <div>
          <ZeixBeoulveOfficerModal 
            onClick={this.handleCloseModal}
            className="CloseModalButton"
          />
        </div>
        </Modal>
      </div>
    );
  }
};

export default ZeixBeoulveModal;