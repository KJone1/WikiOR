import { Box, Heading, Divider, Badge, HStack } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/header";
import SearchBox from "../components/searchBox";
function SearchRes({ match }: any) {
  const [dbc, setData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/tko/filter/${match.params.id}`)
      .then((res: any) => setData(res.data));
  }, [match.params.id]);

  return (
    <Box
      w="100vw"
      h="100vh"
      bg="#fffaf0"
      display="flex"
      flexDirection="column"
      overflowY="scroll"
    >
      <Header />
      <SearchBox mt="2%" mb="2%" />
      {dbc.length === 0
        ? "לא נמצאו תוצאות"
        : dbc.map((arr: any) => (
            <NavLink to={`/takala/${arr.id}`}>
              <Box
                key={`p-${arr.id}`}
                px={6}
                pb={4}
                dir="rtl"
                _hover={{ color: "#0000a0" }}
              >
                <HStack>
                  <Heading alignSelf="center" fontSize="3xl">
                    {arr.fault}
                  </Heading>
                  <Badge
                    variant="outline"
                    colorScheme="purple"
                    alignSelf="center"
                  >
                    {arr.type}
                  </Badge>
                </HStack>

                <Heading fontSize="md" dir="rtl">
                  {arr.desc}
                </Heading>
                <Divider h="10px" />
              </Box>
            </NavLink>
          ))}
    </Box>
  );
}

export default SearchRes;
