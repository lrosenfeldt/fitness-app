import { Route } from 'react-router-dom';
import Dashboard from 'components/dashboard/Dashboard.jsx';
import Browse from 'components/browse/Browse.jsx';

function App() {
  return (
    <>
      <Route exact path="/">
        <Dashboard user={"Lukas"} />
      </Route>
      <Route path="/browse">
        <Browse />
      </Route>
    </>
  );
}

export default App;
