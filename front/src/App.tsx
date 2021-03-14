import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchRes from "./pages/search-results-page";
import Main from "./pages/main";
import Takala from "./pages/takala-page";
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
        <Route
          exact
          path="/takala/:id"
          component={(props: any) => <Takala {...props} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
