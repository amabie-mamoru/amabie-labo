import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import Index from './Index';
import SwordShield01 from './SwordShield01';
import NotFound from '../../NotFound';

const PokemonArticleRouter: React.FC<RouteComponentProps> = (props) => {
  const { match } = props
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`${match.path}`} component={Index} />
        <Route exact path={`${match.path}/sword_x_shield01`} component={SwordShield01} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default PokemonArticleRouter
