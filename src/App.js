import { Route, Redirect } from 'react-router-dom';
import { PageWrapper } from 'components/base/base';
import Navbar from 'components/navbar/Navbar';
import Dashboard from 'components/dashboard/Dashboard.jsx';
import Browse from 'components/browse/Browse.jsx';
import Program from 'components/program/Program.jsx';

function App() {
  return (
    <PageWrapper>
      <Route exact path="/">
        <Redirect to="/dashboard"/>
        <Navbar />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard userName={"Lukas"} />
        <Navbar />
      </Route>

      <Route path="/browse">
        <Browse />
        <Navbar />
      </Route>

      <Route path="/program/:programId">
        <Program />
        <Navbar />
      </Route>
    </PageWrapper>
  );
}

export default App;
