import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";

const DarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Button size={"md"} onClick={toggleColorMode}>
      Pencet cui
    </Button>
  );
};

export default DarkMode;
