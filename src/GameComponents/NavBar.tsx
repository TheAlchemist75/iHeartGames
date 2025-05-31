import { HStack, Image, Text, useColorMode } from "@chakra-ui/react";

import logoHeart from "../assets/logoHeart.png";
import ColorModeToggle from "./ColorModeToggle";
import logoHeartLight from "../assets/logoHeartLight.png";

const NavBar = () => {
  const { colorMode } = useColorMode();

  const logo = colorMode === "light" ? logoHeartLight : logoHeart;
  return (
    <>
      <HStack padding={"1rem"} justifyContent={"space-between"}>
        <HStack>
          <Image src={logo} boxSize={"3.5rem"} />
          <Text>iHeartGames</Text>
        </HStack>

        <HStack>
          <ColorModeToggle />
        </HStack>
      </HStack>
    </>
  );
};

export default NavBar;
