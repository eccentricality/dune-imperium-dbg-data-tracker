import React, { useState, useEffect } from 'react';
import startingDeck from '../../data/startingDeck.json';
import './GameSetup.scss';

function GameSetup() {
    // Declare state for player names, game start status, and player decks
    const [players, setPlayers] = useState(Array(4).fill(''));
    const [gameStarted, setGameStarted] = useState(false);
    const [playerDecks, setPlayerDecks] = useState(Array(4).fill([]));
  
    useEffect(() => {
      // Initialize player decks with startingDeck cards
      const initializePlayerDecks = () => {
        // Helper function to count the total number of cards in the startingDeck
        const countStartingDeckCards = () => {
          let totalCount = 0;
          startingDeck.startingDeck.forEach((card) => {
            totalCount += card.count;
          });
          return totalCount;
        };
      
        const deckSize = countStartingDeckCards();
        const initialDecks = Array(players.length)
          .fill(null)
          .map(() => Array(deckSize).fill('Card'));
      
        setPlayerDecks(initialDecks);
      };         
  
      if (gameStarted) {
        console.log('Starting deck:', startingDeck.startingDeck);
        initializePlayerDecks();
      }
    }, [gameStarted, players]);

  // Update player name in state
  const handlePlayerNameChange = (event, index) => {
    const newPlayers = [...players];
    newPlayers[index] = event.target.value;
    setPlayers(newPlayers);
  };

  // Start the game
  const startGame = () => {
    console.log('Starting game with players:', players);
    setGameStarted(true);
  };

  // Render input fields if the game hasn't started
  const renderInputFields = () => {
    return (
      <div>
        {players.map((player, index) => (
          <input
            key={index}
            placeholder={`Player ${index + 1}`}
            value={player}
            onChange={(event) => handlePlayerNameChange(event, index)}
          />
        ))}
        <button onClick={startGame}>Start Game</button>
      </div>
    );
  };

  const renderDecks = (index) => {
    return (
      <div className="playerDeck">
        <div className="deckCount">{playerDecks[index].length} cards</div>
      </div>
    );
  };
  

  // Render player positions if the game has started
  const renderPlayerPositions = () => {
    return (
      <div className="playerPositions">
        {players.map((player, index) => (
          <div key={index} className={`player player${index + 1}`}>
            {player}
            {renderDecks(index)}
          </div>
        ))}
      </div>
    );
  };

  // The return statement of the GameSetup function
  return (
    <div className="GameSetup">
      {gameStarted ? renderPlayerPositions() : renderInputFields()}
    </div>
  );
}

export default GameSetup;