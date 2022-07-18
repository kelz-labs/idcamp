import { Container, Flex } from "@chakra-ui/react";
import { Ilayout } from "../../../interface";

const Layout = ({ children }: Ilayout) => {
  return (
    <Container border={"2px"} maxWidth={"container.lg"}>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        {children}
      </Flex>
    </Container>
  );
};

export default Layout;
