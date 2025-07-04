import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./GameComponents/NavBar";
import GameGrid from "./GameComponents/GameGrid";
import GenresList from "./GameComponents/GenresList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./GameComponents/PlatformSelector";
import type { Platform } from "./hooks/useGames";
import SortSelector from "./GameComponents/SortSelector";
import GameHeading from "./GameComponents/GameHeading";

import { injectSpeedInsights } from "@vercel/speed-insights";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>

        <GridItem
          area={"aside"}
          display={{ base: "none", lg: "block" }}
          paddingX={5}
        >
          <GenresList
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>

        <GridItem area={"main"}>
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery} />
            <HStack spacing={5} marginBottom={5}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </HStack>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
      {injectSpeedInsights()}
    </>
  );
}

export default App;
