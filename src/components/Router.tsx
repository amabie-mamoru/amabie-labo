import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import NotFound from './NotFound';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path='/' component={App} />
        <Route path='*' component={NotFound} />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

const Header: React.FC = () => {
  return (
    <header>
      <a href="/">
        <h1>天日江ラボ</h1>
      </a>
    </header>
  );
}

const Footer: React.FC = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021 <a href="https://twitter.com/amabie_mamoru">@amabie_mamoru</a>. All Rights Reserved.</p>
    </footer>
  );
}

export default Router;
