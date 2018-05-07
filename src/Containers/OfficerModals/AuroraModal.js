import React, { Component } from 'react';
import Modal from 'react-modal';
import AuroraOfficerModal from '../../Components/Officers/OfficerModals/AuroraOfficerModal';
import { Button } from 'react-materialize';

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
        <img className="ModalImage" src="https://cdn.discordapp.com/attachments/415463104579895296/441330700910592010/2018-04-30_23_46_51-FINAL_FANTASY_XIV.png" alt=""/>
      <Button
        onClick={this.handleOpenModal}
        className="ButtonModalOpen"
        waves='light' >
        Aurora
      </Button>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Aurora"
          onRequestClose={this.handleCloseModal}
          className="AliceModal"
          overlayClassName="Overlay"
        >
        <div>
          <AuroraOfficerModal />
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

export default AuroraModal;