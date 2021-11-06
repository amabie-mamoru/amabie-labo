import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import Index from './Index';
import PikoPiko from './PikoPiko';
import NotFound from '../NotFound';

const ToolRouter: React.FC<RouteComponentProps> = (props) => {
  const { match } = props
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`${match.path}`} component={Index} />
        <Route exact path={`${match.path}/pikopiko`} component={PikoPiko} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default ToolRouter
