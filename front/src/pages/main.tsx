import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "../components/header";
import SearchBox from "../components/searchBox";

function Main() {
  return (
    <Box w="100vw" h="100vh" bg="#fffaf0" display="flex" flexDirection="column">
      <Header />
      {/* //// */}
      <Box
        h="100%"
        w="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box borderRadius="100%" bg="red" w="20vh" h="20vh" mt="8%">
          קרן אור
        </Box>
        <SearchBox mt="4%" />
      </Box>
    </Box>
  );
}

export default Main;
