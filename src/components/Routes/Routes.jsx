import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact={true} path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
