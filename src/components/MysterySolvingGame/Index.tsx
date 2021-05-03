import React from 'react';
import '../../styles/MysterySolvingGame/Index.scss';
import blind_girl from '../../images/mystery-solving-game/blind-girl-banner.png';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  const ua = window.navigator.userAgent.toLowerCase();
  let IndexComponent;
  if (ua.indexOf('iphone') > 0 || ua.indexOf('ipod') > 0 || (ua.indexOf('android') > 0 && ua.indexOf('mobile') > 0)) {
    IndexComponent = <IndexForSP />;
  } else if (ua.indexOf('ipad') > 0 || ua.indexOf('android') > 0) {
    // iOS12 まで
    IndexComponent = <IndexForSP />;
  } else if (ua.indexOf('ipad') > -1 || (ua.indexOf('macintosh') > -1 && 'ontouchend' in document)) {
    // iOS13 以降
    IndexComponent = <IndexForSP />;
  } else {
    IndexComponent = <IndexForPC />;
  }
  return IndexComponent;
}

const IndexForPC: React.FC = () => {
  return (
    <div className="msg-index">
      <h2>このページについて</h2>
      <p className="msg-index__description">
        このページは天日江護の制作した謎解き作品の紹介とをツールを紹介しています。<br />
        作品については Booth にて販売していますので、そちらをご確認ください！
      </p>
      <p className="msg-index__shop">
        Booth へ GO → <a href="https://amabie-mamoru.booth.pm/" target="_blank" rel="noreferrer">https://amabie-mamoru.booth.pm/</a>
      </p>
      <p className="msg-index__description">
        以下はゲームを進行するための補助ツールを提供しています。<br />
        購入者は是非利用してみてくださいね🐳<br />
      </p>
      <h2>作品別補助ツール</h2>
      <div className="msg-index__work">
        <Link to='/mystery_solving_game/blind_girl'>
          <img className="msg-index__work-list-image" src={blind_girl} alt="盲目少女の奇妙な一日" />
        </Link>
      </div>
    </div>
  );
}

const IndexForSP: React.FC = () => {
  return (
    <div className="msg-index">
      <h2>このページについて</h2>
      <p className="msg-index__description">
        このページは天日江護の制作した謎解き作品の紹介とをツールを紹介しています。<br />
        作品については Booth にて販売していますので、そちらをご確認ください！
      </p>
      <p className="msg-index__shop">
        Booth へ GO → <a href="https://amabie-mamoru.booth.pm/" target="_blank" rel="noreferrer">https://amabie-mamoru.booth.pm/</a>
      </p>
      <p className="msg-index__description">
        補助ツールについてはSPは対応しておりません🙇‍♂️<br />
        パソコンでお試しください。
      </p>
    </div>
  )
}

export default Index;
