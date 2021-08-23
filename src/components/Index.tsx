import React from 'react';
import '../styles/Index.scss';
import amabie from '../images/amabie.png';
import murder_mystery from '../images/murder-mystery-work-list-banner.png';
import mystery_solving_game from '../images/mystery-solving-game-work-list-banner.png';
import know_how_streaming from '../images/homepage-know-how-streaming-banner.png';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

interface IState {
  isVisibleMessage: boolean;
}

class Index extends React.Component<{}, IState> {
  render () {
    return (
      <div className="index">
        <Head />
        <section>
          <img className="index__chara-image" src={amabie} alt="天日江" />
          <div className="index__chara-message">
            <div className="index__chara-message-frame">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.pauseFor(3300)
                    .typeString(
                      'こんびえ〜🧜‍♂️<br />'
                    )
                    .typeString(
                      '<ruby>天日江<rt>あまびえ</rt>&nbsp;護<rt>　まもる</rt></ruby>です⛱<br />'
                    )
                    .typeString(
                      'ここには僕の作ったものが公開されていきます！<br />'
                    )
                    .typeString(
                      '是非遊んでいってくださいね🐳'
                    )
                    .start();
                }} />
            </div>
          </div>
        </section>
        <section>
          <h2 className="index__work-list-h2">作品一覧</h2>
          <div className="index__work-list--work">
            <Link to="/murder_mystery">
              <img src={murder_mystery} alt="マーダーミステリー" />
            </Link>
          </div>
          <div className="index__work-list--work">
            <Link to="/mystery_solving_game">
              <img src={mystery_solving_game} alt="謎解き" />
            </Link>
          </div>
          <h2 className="index__know-how-h2">ノウハウ</h2>
          <div className="index__know-how--streaming">
            <Link to="/know_how">
              <img src={know_how_streaming} alt="配信お役立ち情報" />
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

const Head: React.FC = () => {
  const title = 'あまびえラボ';
  const type = 'website';
  const img = 'https://amabie-labo.com/ogp.png';
  const url = 'https://amabie-labo.com';
  const description = '天日江護の公式サイトです';
  return (
    <Helmet>
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={img} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
}

export default Index;
