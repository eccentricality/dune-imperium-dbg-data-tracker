import React, { useState } from 'react';
import './GameSetup.css';
import startingDeck from '../../data/startingDeck.json';
import PlayerSetup from '../PlayerSetup/PlayerSetup';

const GameSetup = ({ setPlayerOrder, setPlayerDecks }) => {
  const [playerCount, setPlayerCount] = useState(2); // Manage number of players
  const [isSetupComplete, setIsSetupComplete] = useState(false); // Manage game setup completion

  const handlePlayerCountChange = (event) => {
    setPlayerCount(Number(event.target.value));
  };

  const handleGameSetupComplete = () => {
    // Create an array of player orders based on the selected player count
    const orders = Array.from({ length: playerCount }, (_, i) => i + 1);
    setPlayerOrder(orders);

    // Create an array of player decks based on the starting deck
    const decks = Array.from({ length: playerCount }, () => [...startingDeck]);
    setPlayerDecks(decks);

    setIsSetupComplete(true);
  };

  return (
    <div className="GameSetup">
      {!isSetupComplete && (
        <>
          <h2>Game Setup</h2>
          <label>
            Number of players:
            <select value={playerCount} onChange={handlePlayerCountChange}>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </label>
          <button onClick={handleGameSetupComplete}>Start Game</button>
        </>
      )}
      {isSetupComplete && <PlayerSetup playerCount={playerCount} />}
    </div>
  );
};

export default GameSetup;
