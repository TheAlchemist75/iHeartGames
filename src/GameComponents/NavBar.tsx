import { HStack, Image, Text } from "@chakra-ui/react";

import logoHeart from "../assets/logoHeart.png";

const NavBar = () => {
  return (
    <>
      <HStack>
        <Image src={logoHeart} boxSize={"3rem"} />
        <Text>iHeartGames</Text>
      </HStack>
    </>
  );
};

export default NavBar;
