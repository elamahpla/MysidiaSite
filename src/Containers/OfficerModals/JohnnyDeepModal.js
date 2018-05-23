import React, { Component } from 'react';
import Modal from 'react-modal';
import JohnnyDeepOfficerModal from '../../Components/Officers/OfficerModals/JohnnyDeepOfficerModal';
import { Button } from 'react-materialize';

class JohnnyDeepModal extends Component {
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
          Johnny Deep
        </Button>
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