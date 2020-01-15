import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import Welcome from 'components/Welcome';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline></CssBaseline>
      <Router>
        <Switch>
          <Route path='/'>
            <Welcome></Welcome>
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
