import { GameProvider } from './context/GameContext';
import Game from './components/Game';

function App() {
//import and use the 'Game' component
  return (
    <div>
      <h1>Dune Imperium DBG Data Tracker</h1>
      <Game />
    </div>
  );
}

export default () => (
  <GameProvider>
    <App />
  </GameProvider>
);
