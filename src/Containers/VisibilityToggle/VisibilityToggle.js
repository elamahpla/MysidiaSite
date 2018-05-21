import React, { Component } from 'react';
import JacobDavidModal from '../OfficerModals/JacobDavidMoal';
import JohnnyDeepModal from '../OfficerModals/JohnnyDeepModal';
import ColmArkusModal from '../OfficerModals/ColmArkusModal';
import ZeixBeoulveModal from '../OfficerModals/ZeixBeoulveModal';

class VisibilityToggle extends Component {
  state = {
    visibility: false
  }
  handleToggleVisibility = () => {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <button
          className="InactiveOfficersButton"
          onClick={this.handleToggleVisibility}>
            {this.state.visibility ? 'Hide Inactice Officers' : 'Show Inactive Officers'}
        </button>
        {this.state.visibility && (
          <div className="InactiveOfficersToggle">
            <JacobDavidModal />
            <JohnnyDeepModal />
            <ColmArkusModal />
            <ZeixBeoulveModal />
          </div>
        )}
      </div>
    );
  }
}

export default VisibilityToggle;