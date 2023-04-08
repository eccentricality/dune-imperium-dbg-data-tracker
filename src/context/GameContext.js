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

const [gameState, setGameState] = useState(initialState);

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState({
    // Add your initial game state here
  });

  return (
    <GameContext.Provider value={{ gameState, setGameState }}>
      {children}
    </GameContext.Provider>
  );
};
