import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import Index from './Index';
import Streaming01 from './Streaming01';
import Streaming02 from './Streaming02';
import NotFound from '../NotFound';

const KnowHowRouter: React.FC<RouteComponentProps> = (props) => {
  const { match } = props
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`${match.path}`} component={Index} />
        <Route exact path={`${match.path}/streaming01`} component={Streaming01} />
        <Route exact path={`${match.path}/streaming02`} component={Streaming02} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default KnowHowRouter
