import React, { Component } from 'react';

class MemberSpotlight extends Component {
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
        <button className="MemberSpotlightButton" onClick={this.handleToggleVisibility}>
            {this.state.visibility ? 'Hide Rquirements' : 'How to be Featured'}
        </button>
        {this.state.visibility && (
          <div className="MemberSpotlightText">
            <p>To be featured in the Membver Spotlight, you must helpful, outgoing, and have an overall positive attitude. This includes dungeons, FC chat, and any other location. For anyone wanting to nominate someone, feel free to message any officer.</p>
          </div>
        )}
      </div>
    );
  }
}

export default MemberSpotlight;