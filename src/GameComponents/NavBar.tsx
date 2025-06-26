import { Box, HStack, Image, Link, Text, useColorMode } from "@chakra-ui/react";

import logoHeart from "../assets/logoHeart.png";
import logoHeartLight from "../assets/logoHeartLight.png";
import ColorModeToggle from "./ColorModeToggle";
import SearchInput from "./SearchInput";

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: SearchInputProps) => {
  const { colorMode } = useColorMode();
  const logo = colorMode === "light" ? logoHeartLight : logoHeart;

  return (
    <HStack padding="1rem" justifyContent="space-between">
      <HStack flex="1" spacing={4}>
        <Image src={logo} boxSize="3.5rem" />
        <Link href="/" _hover={{ textDecoration: "none" }}>
          <Text
            whiteSpace="nowrap"
            fontFamily="'Racing Sans One', sans-serif"
            fontSize="3xl"
          >
            iHeartGames
          </Text>
        </Link>

        <Box flex="1">
          <SearchInput onSearch={onSearch} />
        </Box>
      </HStack>

      <ColorModeToggle />
    </HStack>
  );
};

export default NavBar;
