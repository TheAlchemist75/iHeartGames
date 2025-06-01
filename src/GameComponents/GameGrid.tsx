import useGames from "@/hooks/useGames";

const GameGrid = () => {
  const { games, errors } = useGames();
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
