import apiClient from "../services/api-client";
import { useEffect, useState } from "react";

interface Game {
  id: number;
  name: string;
}

interface GameResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    apiClient
      .get<GameResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setErrors(err.message));
  });
  return (
    <>
      {errors && <div>{errors}</div>}
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </>
  );
};

export default GameGrid;
