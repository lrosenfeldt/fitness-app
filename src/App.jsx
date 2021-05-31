import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Dashboard from "pages/dashboard";
import Browse from "pages/browse/Browse";
import Program from "pages/program";
import PageNotFound from "pages/404";

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

        <Route path="/browse">
          <Browse />
        </Route>

        <Route path="/program/:id">
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
