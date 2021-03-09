import { Box, Heading, Divider, Badge, HStack } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import SearchBox from "../components/searchBox";
function SearchRes({ match }: any) {
  const [dbc, setData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/erez/filter/${match.params.id}`)
      .then((res: any) => setData(res.data));
  }, [match.params.id]);

  return (
    <Box
      w="100vw"
      h="100vh"
      bg="#fffaf0"
      display="flex"
      flexDirection="column"
      alignItems="flex-end"
      overflowY="scroll"
    >
      <SearchBox mt="4%" />
      {dbc.length === 0
        ? "לא נמצאו תוצאות"
        : dbc.map((arr: any, index: number) => (
            <Box key={`p-${index}`} mx={6} my={4} w="40%">
              <HStack dir="rtl">
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
          ))}
    </Box>
  );
}

export default SearchRes;
