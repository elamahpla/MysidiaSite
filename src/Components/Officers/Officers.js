import React from 'react';
import AliceModal from '../../Containers/OfficerModals/AliceModal';
import AvenModal from '../../Containers/OfficerModals/AvenModal';
import AuroraModal from '../../Containers/OfficerModals/AuroraModal';
import JoeyModal from '../../Containers/OfficerModals/JoeyModal';

const Officers = () => (
  <div>
    <div className="OfficersContainer">
      <h1>From Officers</h1>
        <div className="Officers">
          <AliceModal />
          <hr/>
          <AvenModal />
          <hr/>
          <AuroraModal />
          <hr/>
          <JoeyModal />
        </div>
    </div>
  </div>
);

export default Officers;