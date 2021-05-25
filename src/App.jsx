import { Route, Redirect, Switch } from "react-router-dom";
import { PageWrapper } from "components/base/base";
import Navbar from "components/navbar/Navbar";
import Dashboard from "pages/dashboard/Dashboard";
import Browse from "pages/browse/Browse";
import Program from "pages/program/Program";
import PageNotFound from "pages/404/PageNotFound";

function App() {
  return (
    <PageWrapper>
      <Switch>
        <Route exact path="/">
          <Redirect to="/dashboard" />
          <Navbar />
        </Route>

        <Route exact path="/dashboard">
          <Dashboard userName="Lukas" />
          <Navbar />
        </Route>

        <Route path="/browse">
          <Browse />
          <Navbar />
        </Route>

        <Route path="/program/:id">
          <Program />
          <Navbar />
        </Route>

        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </PageWrapper>
  );
}

export default App;
