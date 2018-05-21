import React, { Component } from 'react';
import Modal from 'react-modal';
import ColmArkusOfficerModal from '../../Components/Officers/OfficerModals/ColmArkusOfficerModal';

class ColmArkusModal extends Component {
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
          Colm Arkus
        </button>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="ColmArkus"
          onRequestClose={this.handleCloseModal}
          className="AliceModal"
          overlayClassName="Overlay"
        >
        <div>
          <ColmArkusOfficerModal 
            onClick={this.handleCloseModal}
            className="CloseModalButton"
          />
        </div>
        </Modal>
      </div>
    );
  }
};

export default ColmArkusModal;