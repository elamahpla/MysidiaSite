import React, { Component } from 'react';
import Modal from 'react-modal';
import AvenOfficerModal from '../../Components/Officers/OfficerModals/AvenOfficerModal';
import { Button } from 'react-materialize';

class AvenModal extends Component {
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
        <img style={{width: '20rem', height: '20rem'}} src="https://cdn.discordapp.com/attachments/415463104579895296/441350868101627924/2018-04-30_23_46_51-FINAL_FANTASY_XIV.jpg" alt=""/>
        <Button
          waves='light'
          className="ButtonModalOpen"
          onClick={this.handleOpenModal}
        >
          Aven
        </Button>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Aven"
          onRequestClose={this.handleCloseModal}
          className="AvenModal"
          overlayClassName="Overlay"
        >
        <div>
          <AvenOfficerModal />
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

export default AvenModal;