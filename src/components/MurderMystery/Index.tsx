import React from 'react';
import '../../styles/MurderMystery/Index.scss';
import { Link } from 'react-router-dom';
import eosj from '../../images/murder-mystery/end-of-space-journey-banner.png';
import eosjas from '../../images/murder-mystery/end-of-space-journey-another-story-banner.png';
import murder_mystery from '../../images/murder-mystery-work-list-banner.png';
import Helmet from 'react-helmet';

const Index: React.FC = () => {
  const ua = window.navigator.userAgent.toLowerCase();
  let IndexComponent;
  if (ua.indexOf('iphone') > 0 || ua.indexOf('ipod') > 0 || (ua.indexOf('android') > 0 && ua.indexOf('mobile')) > 0) {
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
    <div className="mm-index">
      <Head />
      <h2>このページについて</h2>
      <p className="mm-index__description">
        このページは天日江護の制作したマーダーミステリー作品の紹介とをツールを紹介しています。<br />
        作品については Booth にて販売していますので、そちらをご確認ください！
      </p>
      <p className="mm-index__shop">
        Booth へ GO → <a href="https://amabie-mamoru.booth.pm/" target="_blank" rel="noreferrer">https://amabie-mamoru.booth.pm/</a>
      </p>
      <p className="mm-index__description">
        以下は配信などで遊びやすくするために、カンニングする人がいない前提で進行を補助するツールを提供しています。<br />
        購入者は是非利用してみてくださいね🐳<br />
      </p>
      <h2>作品別補助ツール</h2>
      <div className="mm-index__work">
        <Link to='/murder_mystery/end_of_space_journey'>
          <img className="mm-index__work-list-image" src={eosj} alt="スペースジャーニーの結末" />
        </Link>
      </div>
      <div className="mm-index__work">
        <Link to='/murder_mystery/end_of_space_journey_another_story'>
          <img className="mm-index__work-list-image" src={eosjas} alt="スペースジャーニーの結末 - アナザーストーリー -" />
        </Link>
      </div>
    </div>
  );
}

const IndexForSP: React.FC = () => {
  return (
    <div className="mm-index">
      <Head />
      <h2>このページについて</h2>
      <p className="mm-index__description">
        このページは天日江護の制作したマーダーミステリー作品の紹介とをツールを紹介しています。<br />
        作品については Booth にて販売していますので、そちらをご確認ください！
      </p>
      <p className="mm-index__shop">
        Booth へ GO → <a href="https://amabie-mamoru.booth.pm/" target="_blank" rel="noreferrer">https://amabie-mamoru.booth.pm/</a>
      </p>
      <p className="mm-index__description">
        補助ツールについてはSPは対応しておりません🙇‍♂️<br />
        パソコンでお試しください。
      </p>
    </div>
  )
}

const Head: React.FC = () => {
  const title = 'マーダーミステリー';
  const type = 'website';
  const img = `https://amabie-labo.com${murder_mystery}`;
  const url = 'https://amabie-labo.com/murder_mystery';
  const description = 'マーダーミステリーの作品一覧です';
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
