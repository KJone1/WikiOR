import React from "react";
import {
  Box,
  Divider,
  Heading,
  HStack,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import Header from "../components/header";
import axios from "axios";
import day from "dayjs";

interface Itype {
  id: number;
  fault: string;
  solution: string[];
  cause: string[];
  type: string;
  severity: string | null;
  desc: string | null;
  created_at: string;
}

function Takala({ match }: any) {
  const [dbc, setData] = React.useState<Itype>();
  React.useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/tko/${match.params.id}`)
      .then((res: any) => setData(res.data));
  }, []);
  return (
    <Box w="100vw" h="100vh" bg="#fffaf0" display="flex" flexDirection="column">
      <Header />
      {/* //// */}
      <Box
        h="100%"
        w="100%"
        mt={8}
        display="flex"
        flexDirection="column"
        dir="rtl"
        px={8}
      >
        <Heading size="xl">{dbc?.fault}</Heading>
        <Divider h={2} mb={4} />
        <Text size="xl" mb={4}>
          {dbc?.desc}
        </Text>

        <Heading as="u" size="md">
          סיבות לתקלה:
        </Heading>

        <UnorderedList mb={4}>
          {dbc?.cause.map((arr: any) => (
            <ListItem>{arr}</ListItem>
          ))}
        </UnorderedList>

        <Heading as="u" size="md">
          דרכים לפתרון:
        </Heading>
        <UnorderedList mb={4}>
          {dbc?.solution.map((arr: any) => (
            <ListItem>{arr}</ListItem>
          ))}
        </UnorderedList>
      </Box>
      <Text as="samp" size="xl" justifySelf="flex-end">
        created at : {day(dbc?.created_at).format("DD-MM-YYYY")}
      </Text>
    </Box>
  );
}

export default Takala;
