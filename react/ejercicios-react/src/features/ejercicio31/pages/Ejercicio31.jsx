import { useState, useEffect } from "react";
import { gameSubject, initGame, resetGame } from "../utils/Game";
import { Board } from "@/features/ejercicio31/components";

const Ejercicio31 = () => {
  const [board, setBoard] = useState([]);
  const [isGameOver, setIsGameOver] = useState();
  const [result, setResult] = useState();
  const [turn, setTurn] = useState();

  useEffect(() => {
    initGame();
    const subscribe = gameSubject.subscribe((game) => {
      setBoard(game.board);
      setIsGameOver(game.isGameOver);
      setResult(game.result);
      setTurn(game.turn);
    });
    return () => subscribe.unsubscribe();
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center bg-[rgb(34,34,34)]">
      {isGameOver && (
        <h2 className="p-3 text-white">
          GAME OVER
          <button onClick={resetGame}>
            <span className="p-3 text-white"> NEW GAME</span>
          </button>
        </h2>
      )}
      <div className="w-[600px] h-[600px]">
        <Board board={board} turn={turn} />
      </div>
      {result && <p className="p-3 text-white">{result}</p>}
    </div>
  );
};

export default Ejercicio31;
