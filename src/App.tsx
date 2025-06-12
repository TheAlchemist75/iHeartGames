import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./GameComponents/NavBar";
import GameGrid from "./GameComponents/GameGrid";
import GenresList from "./GameComponents/GenresList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>

        <GridItem
          area={"aside"}
          display={{ base: "none", lg: "block" }}
          paddingX={5}
        >
          <GenresList onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>

        <GridItem area={"main"}>
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
