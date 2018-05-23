import React, { Component } from 'react';
import Modal from 'react-modal';
import JacobDavidOfficerModal from '../../Components/Officers/OfficerModals/JacobDavidOfficerModal';
import { Button } from 'react-materialize';

class JacobDavidModal extends Component {
  state = {
    showModal: false
  };
  handleOpenModal = () => {
    this.setState({showModal: true});
    const elements = document.getElementsByClassName('ButtonModalOpen')
    for (let i = 0; i < elements.length; i++) {
      elements[i].disabled = true
    }
  }
  handleCloseModal = () => {
    this.setState({showModal: false});
    const elements = document.getElementsByClassName('ButtonModalOpen')
    for (let i = 0; i < elements.length; i++) {
      elements[i].disabled = false
    }
  }
  render() {
    return (
      <div>
        <Button
          waves='light'
          className="ButtonModalOpen"
          onClick={this.handleOpenModal}
        >
          Jacob David
        </Button>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="JacobDavid"
          onRequestClose={this.handleCloseModal}
          className="AliceModal"
          overlayClassName="Overlay"
        >
        <div>
          <JacobDavidOfficerModal 
            onClick={this.handleCloseModal}
            className="CloseModalButton"
          />
        </div>
        </Modal>
      </div>
    );
  }
};

export default JacobDavidModal;