import { IconButton, useColorMode } from "@chakra-ui/react";
import { LuSun, LuMoon } from "react-icons/lu";

const ColorModeToggle = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <IconButton
      onClick={toggleColorMode}
      variant="outline"
      size="md"
      aria-label="Toggle color mode"
      icon={colorMode === "light" ? <LuMoon /> : <LuSun />}
      fontSize={"20px"}
    />
  );
};

export default ColorModeToggle;
