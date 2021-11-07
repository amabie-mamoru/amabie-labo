import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../../styles/KnowHow/Base.scss';
import img_pikopiko_obs_x_discord from '../../images/tool/pikopiko-obs-x-discord.png';
import img_pikopiko_obs_x_discord_how_to from '../../images/know-how/pikopiko-obs-x-discord.png';
import img_obs_pain from '../../images/know-how/pikopiko-obs-x-discord/obs-pain.png';
import img_obs_browser_pain from '../../images/know-how/pikopiko-obs-x-discord/obs-browser-pain.png';
import img_tool01 from '../../images/know-how/pikopiko-obs-x-discord/tool01.png';
import img_tool02 from '../../images/know-how/pikopiko-obs-x-discord/tool02.png';
import img_tool03 from '../../images/know-how/pikopiko-obs-x-discord/tool03.png';
import img_tool04 from '../../images/know-how/pikopiko-obs-x-discord/tool04.png';
import img_tool05 from '../../images/know-how/pikopiko-obs-x-discord/tool05.png';

const Index: React.FC = () => {
  return (
    <div className="kh-show">
      <Head />
      <h2>「OBSでピコピコを楽に生成ツール」の使い方</h2>
      <p className="kh-show-timestamp">2021.11.14</p>
      <p>
        こんびえ〜🧜‍♂️天日江護です🐳<br />
        今回は便利ツールを作ってきたのでその使い方の紹介です⛱<br />
      </p>
      <p className="kh-show-image">
        制作した「OBSでピコピコを楽に生成ツール」はこちら↓
        <a href="/tool/pikopiko">
          <img src={img_pikopiko_obs_x_discord} alt = "OBSでピコピコを楽に生成ツール" width="400" />
        </a>
      </p>
      <h3>背景</h3>
      <p>
        配信者の皆さんは他の配信者とコラボ時、ピコピコ<sup>※</sup>してますか〜？<br />
        僕はしてます！...が、コラボ人数が増えてくると結構手間だな〜と感じています😰<br />
        <br />
        ※ピコピコとは、 OBS で Discord のボイチャの反応をキャッチして喋ってる風に表現する手法です。<br />
        　百聞は一見にしかずなので一度下のサイトや「OBS ピコピコ」などで検索してみてください！
      </p>
      <Quote
        title={'Discordで喋ってる人を分かり易くするカスタムCSS | 萬巓堂本店'}
        link={'https://manten-do.net/archives/273'}
        imgUrl={'https://manten-do.net/wp-content/uploads/2019/07/0-1.png'}
        description={'配信ツール上でDiscordのオーバーレイ（発話者アイコン）を立ち絵に変えるカスタムCSSです。'}
      />
      <div>
        具体的には、コラボ人数が増えたり、コラボの回数が増えるほど準備が大変に感じてきました...<br/>
        今回はこの事象のほんの一部を解消するツールです。<br />
        <p className="kh-show-image">
          <img src={img_obs_pain} alt="コラボに伴う地獄のようなピコピコ準備作業" />
        </p>
        ※Among Us などのゲームはピコピコ以外の便利ツールがありますのでそちらもご検討ください。<br />
        　そのツール群でも納得できずピコピコさせたい人向けの内容になります。
      </div>
      <h3>使い方</h3>
      <p>
        すでにピコピコを試した前提で説明します。<br />
        ピコピコの大変さはブラウザソースの中の幅や高さを調べたりカスタムCSSの一部を書き換えることにあると思います。
      </p>
      <p className="kh-show-image">
        <img src={img_obs_browser_pain} alt="ブラウザソースで大変な作業" width="400"/>
      </p>
      <p>
        これを自動生成します。<br />
        まずは[新規] の項目に登録したい名前と登録する人のDiscordのIDと登録する人の画像を入力してください。<br />
        名前は登録用なので、Discordの名前と違っても構いません。
      </p>
      <p className="kh-show-image">
        <img src={img_tool01} alt="新規登録" width="300" />
        <img src={img_tool02} alt="自動登録" width="300" />
      </p>
      <p className="kh-show-image">
      </p>
      <p>
        一度登録した人はリストから選択すると再度表示することができます。
      </p>
      <p className="kh-show-image">
        <img src={img_tool03} alt="登録済みリスト" width="400" />
      </p>
      <p>
        カスタムCSSを自分なりに変更している方もいらっしゃると思います。<br />
        ルールにある通り、DiscordのIDを入れるところを「##ID##」、画像URLを入れるところを「##URL##」というルールさえ守っていただければ自由に変更可能です。<br />
        ※一度編集した内容は記録するので次ブラウザを開いた時はあなたの編集したCSSが表示されます。
      </p>
      <p className="kh-show-image">
        <img src={img_tool04} alt="カスタムCSSの編集" width="400" />
      </p>
      <p>
        あとは表示された「幅」「高さ」をコピペし、カスタムCSSは「CSSをクリップボードをコピー」のボタンを押せばペーストするだけで貼り付けることができます！
      </p>
      <p className="kh-show-image">
        <img src={img_tool05} alt="コピペするところ" width="400" />
      </p>
      <h3>注意点</h3>
      <p>
        「安全性に関する詳細」のボタンでも確認できますが、このサイトに登録したデータは登録したブラウザに保存されます。<br />
        そのため、配信用PCを買い替えたり、同じPCだけど違うブラウザで開くと何も登録されていない状態になってしまいます。<br />
        その場合は、「データをDLする」のボタンで Json ファイルをダウンロードし、利用したいブラウザで再度このサイトを開き、「データをアップする」のボタンで Json ファイルをアップロードすれば再度利用することができます。<br />
        また、一つ一つのデータを消す場合は「削除」ボタンで消せますが、ブラウザにデータを残したくなかったり全消ししたい場合は「データを消去する」ボタンで全て削除できます。
      </p>
      <p className="kh-show-margin20">
        では、よき配信ライフを〜🧜‍♂️
      </p>
      <BackButton />
    </div>
  );
}

const BackButton: React.FC = () => {
  return (
    <div className="kh-show-back-button">
      <Link to='/know_how'>
        &lt; 戻る
      </Link>
    </div>
  );
}

interface IProps {
  title: string;
  link: string;
  imgUrl: string;
  description: string;
}

const Quote: React.FC<IProps> = (props) => {
  const { title, link, imgUrl, description } = props
  return (
    <div className="kh-show-quote">
      <div className="kh-show-quote-content">
        <a href={link} target="_blank" rel="noreferrer">
          <p>{title}</p>
          <p className="kh-show-quote-content-description">{description}</p>
          <img src={imgUrl} alt={title} />
        </a>
      </div>
    </div>
  )
}

const Head: React.FC = () => {
  const title = '「OBSでピコピコを楽に生成ツール」の使い方';
  const type = 'article';
  const img = `https://amabie-labo.com${img_pikopiko_obs_x_discord_how_to}`;
  const url = 'https://amabie-labo.com/know_how/streaming02';
  const description = '「OBSでピコピコを楽に生成ツール」の使い方について説明します。';
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

