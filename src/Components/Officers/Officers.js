import React from 'react';
import AliceModal from '../../Containers/OfficerModals/AliceModal';
import AvenModal from '../../Containers/OfficerModals/AvenModal';
import AuroraModal from '../../Containers/OfficerModals/AuroraModal';
import JoeyModal from '../../Containers/OfficerModals/JoeyModal';
import JacobDavidModal from '../../Containers/OfficerModals/JacobDavidMoal';
import StarkNessModal from '../../Containers/OfficerModals/StarkNessModal';
import JohnnyDeepModal from '../../Containers/OfficerModals/JohnnyDeepModal';
import ColmArkusModal from '../../Containers/OfficerModals/ColmArkusModal';
import ZeixBeoulveModal from '../../Containers/OfficerModals/ZeixBeoulveModal';
import ChronoHighwindModal from '../../Containers/OfficerModals/ChronoHighwindModal';
import DanteLeixandModal from '../../Containers/OfficerModals/DanteLeixandModal';
import VisibilityToggle from '../../Containers/VisibilityToggle/VisibilityToggle';

const Officers = () => (
  <div>
    <div className="OfficersContainer">
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