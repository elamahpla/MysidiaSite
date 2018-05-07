import React, { Component } from 'react';
import Modal from 'react-modal';
import AliceOfficerModal from '../../Components/Officers/OfficerModals/AliceOfficerModal';
import { Button } from 'react-materialize';

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
        <img className="ModalImage" src="https://cdn.discordapp.com/attachments/415463104579895296/441330700910592010/2018-04-30_23_46_51-FINAL_FANTASY_XIV.png" alt=""/>
        <Button
          waves='light'
          className="ButtonModalOpen"
          onClick={this.handleOpenModal}
        >
          Alice
        </Button>
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