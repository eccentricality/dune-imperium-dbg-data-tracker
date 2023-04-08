import React from 'react';
import './Game.css';
import GameSetup from '../GameSetup/GameSetup';
import PlayerDashboard from '../PlayerDashboard/PlayerDashboard';
import ImperiumRow from '../ImperiumRow/ImperiumRow';
import Round from '../Round/Round';
import Stats from '../Stats/Stats';

const Game = () => {
  // Use the components from components folder
  return (
    <div className="Game">
      <GameSetup />
      <PlayerDashboard />
      <ImperiumRow />
      <Round />
      <Stats />
    </div>
  );
};

export default Game;
