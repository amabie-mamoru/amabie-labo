import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './Index';
import MurderMysteryRouter from './MurderMystery/Router';
import MysterySolvingGameRouter from './MysterySolvingGame/Router';
import ToolRouter from './Tool/Router';
import KnowHowRouter from './KnowHow/Router';
import GameArticleRouter from './GameArticle/Router';
import NotFound from './NotFound';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Index} />
          <Route path='/murder_mystery' component={MurderMysteryRouter} />
          <Route path='/mystery_solving_game' component={MysterySolvingGameRouter} />
          <Route path='/tool' component={ToolRouter} />
          <Route path='/know_how' component={KnowHowRouter} />
          <Route path='/game_article' component={GameArticleRouter} />
          <Route path='*' component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

const Header: React.FC = () => {
  return (
    <header>
      <a href="/">
        <h1>Amabie Labo</h1>
      </a>
    </header>
  );
}

const Footer: React.FC = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021 <a href="https://twitter.com/amabie_mamoru">@amabie_mamoru</a>.<br className="forSP" /> All Rights Reserved.</p>
    </footer>
  );
}

export default Router;
