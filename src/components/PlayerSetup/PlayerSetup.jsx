import React from 'react';

const PlayerSetup = ({ setPlayerOrder, setPlayerDecks }) => {
  const handlePlayerSubmit = (event) => {
    event.preventDefault();
    // Create an array of player order
    const newPlayerOrder = Array.from(event.target.elements)
      .filter((element) => element.type === 'text')
      .map((element) => element.value);
    setPlayerOrder(newPlayerOrder);

    // Create an array of player decks
    const newPlayerDecks = Array.from(event.target.elements)
      .filter((element) => element.type === 'checkbox' && element.checked)
      .map((element) => element.value);
    setPlayerDecks(newPlayerDecks);
  };

  return (
    <form onSubmit={handlePlayerSubmit}>
      <div>
        <label htmlFor="player1">Player 1 Name:</label>
        <input type="text" id="player1" />
        <label htmlFor="player1Deck">Starting Deck:</label>
        <input type="checkbox" id="player1Deck" value="startingDeck" />
      </div>
      <div>
        <label htmlFor="player2">Player 2 Name:</label>
        <input type="text" id="player2" />
        <label htmlFor="player2Deck">Starting Deck:</label>
        <input type="checkbox" id="player2Deck" value="startingDeck" />
      </div>
      <div>
        <label htmlFor="player3">Player 3 Name:</label>
        <input type="text" id="player3" />
        <label htmlFor="player3Deck">Starting Deck:</label>
        <input type="checkbox" id="player3Deck" value="startingDeck" />
      </div>
      <div>
        <label htmlFor="player4">Player 4 Name:</label>
        <input type="text" id="player4" />
        <label htmlFor="player4Deck">Starting Deck:</label>
        <input type="checkbox" id="player4Deck" value="startingDeck" />
      </div>
      <button type="submit">Start Game</button>
    </form>
  );
};

export default PlayerSetup;
