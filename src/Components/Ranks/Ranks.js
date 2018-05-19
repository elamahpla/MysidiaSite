import React from 'react';
import SquireCard from '../Cards/SquireCard';
import KnightCard from '../Cards/KnightCard';
import BaronCard from '../Cards/BaronCard';
import DukeCard from '../Cards/DukeCard';
import LordCard from '../Cards/LordCard';
import KingOrQueenCard from '../Cards/KingOrQueenCard';
import VeteranCard from '../Cards/VeteranCard';
import RaidLeaderCard from '../Cards/RaidLeaderCard';
import OfficerCard from '../Cards/OfficerCard';
import GuildMasterCard from '../Cards/GuildMasterCard';

const Ranks = () => (
  <div className="RanksContainer">
    <div className="Ranks">
      <SquireCard />
      <KnightCard />
      <BaronCard />
      <DukeCard />
      <LordCard />
      <KingOrQueenCard />
      <VeteranCard />
      <RaidLeaderCard />
      <OfficerCard />
      <GuildMasterCard />
    </div>
  </div>
);

export default Ranks;