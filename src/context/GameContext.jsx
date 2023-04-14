// src/contexts/GameContext.js
import { createContext, useState } from 'react';

const initialState = {
  round: 1,
  playerOrder: [],
  cardsDrawn: [],
  cardsPurchased: [],
  cardsSeenInImperiumRow: [],
  cardsPlayed: [],
  cardsTrashed: [],
  gameWinningStats: {
    cardsPurchased: [],
    cardsPlayed: [],
    cardsRevealed: []
  },
  roundActions: [],
};

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState(initialState);

  return (
    <GameContext.Provider value={{ gameState, setGameState }}>
      {children}
    </GameContext.Provider>
  );
};
