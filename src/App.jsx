import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Dashboard from "@pages/dashboard";
import Browse from "@pages/browse";
import Program from "@pages/program";
import PageNotFound from "@pages/404";
import Workout from "@pages/workout";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>

        <Route exact path="/dashboard">
          <Dashboard />
        </Route>

        <Route exact path="/browse">
          <Browse />
        </Route>

        <Route exact path="/program/day1/:id">
          <Workout />
        </Route>

        <Route exact path="/program/:id">
          <Program />
        </Route>

        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
