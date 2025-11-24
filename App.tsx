import React, { useState, useEffect, useCallback } from 'react';
import GameCanvas from './components/GameCanvas';
import UIOverlay from './components/UIOverlay';
import { GameState } from './types';

function App() {
  const [gameState, setGameState] = useState<GameState>(GameState.START);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // Load High Score
  useEffect(() => {
    const saved = localStorage.getItem('mosquito_mayhem_hs');
    if (saved) {
      setHighScore(parseInt(saved, 10));
    }
  }, []);

  // Update High Score
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('mosquito_mayhem_hs', score.toString());
    }
  }, [score, highScore]);

  const handleStartGame = () => {
    setScore(0);
    setGameState(GameState.PLAYING);
  };

  const handleGameOver = useCallback((finalScore: number) => {
    setScore(finalScore);
    setGameState(GameState.GAME_OVER);
  }, []);

  const handleRestart = () => {
    setScore(0);
    setGameState(GameState.PLAYING);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      <GameCanvas
        gameState={gameState}
        onScoreUpdate={setScore} // Note: This might cause renders, but React 18 handles it well. If performance lag, decouple HUD.
        onGameOver={handleGameOver}
        setInternalScore={setScore}
      />
      <UIOverlay
        gameState={gameState}
        score={score}
        highScore={highScore}
        onStart={handleStartGame}
        onRestart={handleRestart}
      />
    </div>
  );
}

export default App;