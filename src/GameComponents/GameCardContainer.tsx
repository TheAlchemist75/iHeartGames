import { Box } from "@chakra-ui/react";
import { type ReactNode } from "react";

interface GameCardContainerProps {
  children: ReactNode;
}

const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <>
      <Box
        width={{ base: "100%", sm: "100%", md: "100%", lg: "450px" }}
        borderRadius={10}
        overflow={"hidden"}
      >
        {children}
      </Box>
    </>
  );
};

export default GameCardContainer;
