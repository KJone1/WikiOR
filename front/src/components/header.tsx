import { Box } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";

function Header() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
      py="20px"
    >
      <Heading fontSize="3xl">wikiOR</Heading>
      <Box display="flex" justifyContent="space-evenly" w="50%">
        <a href="#">search</a>
        <a href="#">browse</a>
        <a href="#">info</a>
      </Box>
    </Box>
  );
}

export default Header;
