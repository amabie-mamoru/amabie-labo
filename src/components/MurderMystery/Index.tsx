import React from 'react';
import '../../styles/MurderMystery/Index.scss';
import eosj from '../../images/murder-mystery/end-of-space-journey-banner.png';
import eosjas from '../../images/murder-mystery/end-of-space-journey-another-story-banner.png';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  const ua = window.navigator.userAgent.toLowerCase();
  let IndexComponent;
  if (ua.indexOf('iphone') > 0 || ua.indexOf('ipod') > 0 || ua.indexOf('android') > 0 && ua.indexOf('mobile') > 0) {
    IndexComponent = <IndexForSP />;
  } else if (ua.indexOf('ipad') > 0 || ua.indexOf('android') > 0) {
    // iOS12 まで
    IndexComponent = <IndexForSP />;
  } else if (ua.indexOf('ipad') > -1 || ua.indexOf('macintosh') > -1 && 'ontouchend' in document) {
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
      <h2>このページについて</h2>
      <p className="mm-index__description">
        このページは天日江護の制作したマーダーミステリー作品の紹介とをツールを紹介しています。<br />
        作品については Booth にて販売していますので、そちらをご確認ください！
      </p>
      <p className="mm-index__shop">
        Booth へ GO → <a href="https://amabie-mamoru.booth.pm/" target="_blank">https://amabie-mamoru.booth.pm/</a>
      </p>
      <p className="mm-index__description">
        以下は配信などで遊びやすくするために、カンニングする人がいない前提で進行を補助するツールを提供しています。<br />
        購入者は是非利用してみてくださいね🐳<br />
      </p>
      <h2>作品別補助ツール</h2>
      <div className="mm-index__work">
        <Link to='/murder_mystery/end_of_space_journey'>
          <img className="mm-index__work-list-image" src={eosj} />
        </Link>
      </div>
      <div className="mm-index__work">
        <Link to='/murder_mystery/end_of_space_journey_another_story'>
          <img className="mm-index__work-list-image" src={eosjas} />
        </Link>
      </div>
    </div>
  );
}

const IndexForSP: React.FC = () => {
  return (
    <div className="mm-index">
      <h2>このページについて</h2>
      <p className="mm-index__description">
        このページは天日江護の制作したマーダーミステリー作品の紹介とをツールを紹介しています。<br />
        作品については Booth にて販売していますので、そちらをご確認ください！
      </p>
      <p className="mm-index__shop"> Booth へ GO → Comming Soon...</p>
      <p className="mm-index__description">
        補助ツールについてはSPは対応しておりません🙇‍♂️<br />
        パソコンでお試しください。
      </p>
    </div>
  )
}

export default Index;
