import { IconButton, useColorMode } from "@chakra-ui/react";
import { LuSun, LuMoon } from "react-icons/lu";

const ColorModeToggle = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <IconButton
      onClick={toggleColorMode}
      variant="outline"
      size="sm"
      aria-label="Toggle color mode"
      icon={colorMode === "light" ? <LuMoon /> : <LuSun />}
    />
  );
};

export default ColorModeToggle;
