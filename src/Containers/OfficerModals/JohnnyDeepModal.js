import React, { Component } from 'react';
import Modal from 'react-modal';
import JohnnyDeepOfficerModal from '../../Components/Officers/OfficerModals/JohnnyDeepOfficerModal';

class JohnnyDeepModal extends Component {
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
          Johnny Deep
        </button>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="JohnnyDeep"
          onRequestClose={this.handleCloseModal}
          className="AliceModal"
          overlayClassName="Overlay"
        >
        <div>
          <JohnnyDeepOfficerModal 
            onClick={this.handleCloseModal}
            className="CloseModalButton"
          />
        </div>
        </Modal>
      </div>
    );
  }
};

export default JohnnyDeepModal;