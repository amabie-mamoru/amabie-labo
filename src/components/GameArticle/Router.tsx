import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import Index from './Index';
import PokemonArticleRouter from './Pokemon/Router';
import NotFound from '../NotFound';

const GameArticleRouter: React.FC<RouteComponentProps> = (props) => {
  const { match } = props
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`${match.path}`} component={Index} />
        <Route path={`${match.path}/pokemon`} component={PokemonArticleRouter} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default GameArticleRouter
