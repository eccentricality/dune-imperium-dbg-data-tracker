import React, { useState } from 'react';
import './Game.css';
import GameSetup from '../GameSetup/GameSetup';
import PlayerDashboard from '../PlayerDashboard/PlayerDashboard';
import ImperiumRow from '../ImperiumRow/ImperiumRow';
import Round from '../Round/Round';
import Stats from '../Stats/Stats';

const Game = () => {
  const [currentRound, setCurrentRound] = useState(1); // Manage current round
  const [playerOrder, setPlayerOrder] = useState([]); // Manage player order
  const [playerDecks, setPlayerDecks] = useState([]); // Manage player decks
  const [cardsPlayed, setCardsPlayed] = useState([]); // Manage cards played
  const [cardsPurchased, setCardsPurchased] = useState([]); // Manage cards purchased
  const [cardsTrashed, setCardsTrashed] = useState([]); // Manage cards trashed

  // Use the components from components folder
  return (
    <div className="Game">
      <GameSetup
        setPlayerOrder={setPlayerOrder}
        setPlayerDecks={setPlayerDecks}
      />
      <PlayerDashboard
        playerOrder={playerOrder}
        playerDecks={playerDecks}
        cardsPlayed={cardsPlayed}
        cardsPurchased={cardsPurchased}
        cardsTrashed={cardsTrashed}
      />
      <ImperiumRow />
      <Round
        currentRound={currentRound}
        setCurrentRound={setCurrentRound}
        playerOrder={playerOrder}
        playerDecks={playerDecks}
        cardsPlayed={cardsPlayed}
        setCardsPlayed={setCardsPlayed}
        cardsPurchased={cardsPurchased}
        setCardsPurchased={setCardsPurchased}
        cardsTrashed={cardsTrashed}
        setCardsTrashed={setCardsTrashed}
      />
      <Stats
        playerOrder={playerOrder}
        cardsPlayed={cardsPlayed}
        cardsPurchased={cardsPurchased}
        cardsTrashed={cardsTrashed}
      />
    </div>
  );
};

export default Game;
