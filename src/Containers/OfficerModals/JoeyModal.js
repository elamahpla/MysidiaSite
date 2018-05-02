import React, { Component } from 'react';
import Modal from 'react-modal';
import JoeyOfficerModal from '../../Components/Officers/OfficerModals/JoeyOfficerModal';
import { Button } from 'react-materialize';

class JoeyModal extends Component {
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
      <Button 
        className="ButtonModalOpen"
        waves='light' >
        Eat Shit
      </Button>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Joey"
          onRequestClose={this.handleCloseModal}
          className="JoeyModal"
          overlayClassName="Overlay"
        >
        <div>
          <JoeyOfficerModal />
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

export default JoeyModal;