import React from 'react';
import '../../styles/GameArticle/Base.scss';
import { Link } from 'react-router-dom';
import img_pokemon from '../../images/game-article/pokemon-banner.png';
import img_game_article from '../../images/game-article-banner.png';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ReactGA from 'react-ga';

const Index: React.FC = () => {
  return (
    <div className="ga-index">
      <Head />
      <h2>ゲーム関連記事</h2>
      <p>僕がゲームをプレイした中で対外に公開したい情報をアップしていきます🐳</p>
      <ul>
        <li><Link to="game_article/pokemon"><img src={img_pokemon} alt="ポケモン記事" /></Link></li>
      </ul>
    </div>
  );
}

const Head: React.FC = () => {
  const title = 'ゲーム関連記事';
  const type = 'article';
  const img = `https://amabie-labo.com${img_game_article}`;
  const url = 'https://amabie-labo.com/game_article';
  const description = 'ゲーム関連記事です';
  ReactGA.initialize('UA-195013640-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <HelmetProvider>
      <Helmet>
        <meta property="og:title" content={title} />
        <meta property="og:type" content={type} />
        <meta property="og:image" content={img} />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={description} />
      </Helmet>
    </HelmetProvider>
  );
}

export default Index;
