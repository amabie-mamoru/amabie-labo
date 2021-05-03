import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import Index from './Index';
import BlindGirl from './BlindGirl';
import NotFound from '../NotFound';

const MurderMysteryRouter: React.FC<RouteComponentProps> = (props) => {
  const { match } = props
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`${match.path}`} component={Index} />
        <Route exact path={`${match.path}/blind_girl`} component={BlindGirl} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default MurderMysteryRouter
