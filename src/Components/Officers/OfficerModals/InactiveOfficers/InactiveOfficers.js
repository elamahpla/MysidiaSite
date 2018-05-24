import React from 'react';
import JacobDavidModal from '../../../../Containers/OfficerModals/JacobDavidMoal';
import JohnnyDeepModal from '../../../../Containers/OfficerModals/JohnnyDeepModal';
import ColmArkusModal from '../../../../Containers/OfficerModals/ColmArkusModal';
import ZeixBeoulveModal from '../../../../Containers/OfficerModals/ZeixBeoulveModal';

const InactiveOfficers = () => (
  <div className="InactiveOfficersContainer">
    <div className="InactiveOfficers">
      <div className="InactiveOfficersToggle">
        <JacobDavidModal />
        <JohnnyDeepModal />
        <ColmArkusModal />
        <ZeixBeoulveModal />
      </div>
    </div>
  </div>
);

export default InactiveOfficers;