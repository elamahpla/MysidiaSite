import React, { Component } from 'react';
import Modal from 'react-modal';
import ZeixBeoulveOfficerModal from '../../Components/Officers/OfficerModals/ZeixBeoulveOfficerModal';
import { Button } from 'react-materialize';

class ZeixBeoulveModal extends Component {
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
          Zeix Beoulve
        </Button>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="ZeixBeoulve"
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