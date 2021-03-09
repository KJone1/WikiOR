import { Button, Input, Stack } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function SearchBox(props: any) {
  const [query, setQuery] = React.useState("");
  return (
    <Stack
      direction="row"
      dir="rtl"
      w="33%"
      display="flex"
      alignItems="center"
      mt={props.mt}
      alignSelf="center"
    >
      <Input
        placeholder="חפש תקלה"
        size="md"
        dir="rtl"
        onChange={(event) => {
          setQuery(event.target.value);
        }}
      />
      <NavLink to={`/search/${query}`}>
        <Button rightIcon={<BsSearch />} colorScheme="blue" variant="solid">
          חפש
        </Button>
      </NavLink>
    </Stack>
  );
}

export default SearchBox;
