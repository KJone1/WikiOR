import { Box, Heading, Stack } from "@chakra-ui/layout";
import React from "react";
import axios from "axios";
import { Input } from "@chakra-ui/input";
import { BsSearch } from "react-icons/bs";
import { Button } from "@chakra-ui/react";
import Header from "./components/header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchRes from "./pages/search-result";
import Main from "./pages/main";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={(props: any) => <Main {...props} />} />

        <Route
          exact
          path="/search/:id"
          component={(props: any) => <SearchRes {...props} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
