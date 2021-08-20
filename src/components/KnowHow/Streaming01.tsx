import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import '../../styles/KnowHow/Base.scss';
import img_vtube_studio_x_discord from '../../images/know-how/vtube-studio-x-discord.png';
import img_prepare from '../../images/know-how/vtube-studio-x-discord/prepare.png';
import img_xsplit01 from '../../images/know-how/vtube-studio-x-discord/xsplit-broadcaster01.png';
import img_xsplit02 from '../../images/know-how/vtube-studio-x-discord/xsplit-broadcaster02.png';
import img_discord01 from '../../images/know-how/vtube-studio-x-discord/discord01.png';
import img_discord02 from '../../images/know-how/vtube-studio-x-discord/discord02.png';
import img_discord03 from '../../images/know-how/vtube-studio-x-discord/discord03.png';

const Index: React.FC = () => {
  return (
    <div className="kh-show">
      <Head />
      <h2>VTube Studio と Discord を使って共演 VTuber をぬるぬる動かす</h2>
      <p className="kh-show-timestamp">2021.08.21</p>
      <p className="kh-show-image">
        <img src={img_vtube_studio_x_discord} alt = "VTube Studio と Discord を使って共演 VTuber をぬるぬる動かす" width="400" />
      </p>
      <p>
        こんびえ〜🧜‍♂️天日江護です🐳<br />
        今回は共演者や自分を共演者の配信画面上でぬるぬる動かすための方法についてお伝えします。
      </p>
      <h3>背景</h3>
      <p>
        僕は元々は配信を FaceRig x OBS でやっていたのですが、最近は Live2D の設定が少なめでも身体の動きを表現しやすい VTube Studio を採用しています。
      </p>
      <p className="kh-show-image">
        VTube Studio はこちら↓<br />
        <a href="https://store.steampowered.com/app/1325860/VTube_Studio/">
          <img src="https://cdn.akamai.steamstatic.com/steam/apps/1325860/header.jpg?t=1617063583" alt="VTube Studio" />
        </a>
      </p>
      <p>
        VTuber 界隈も発展してきて、最近は共演者も動くことが増えてきました。<br />
        ググった感じ FaceRig x Discord で共演者を動かす方法はあるものの、 VTube Studio x Discord に関してはは見つけられませんでした。<br />
        今回は VTube Studio を使ってぬるぬる動かせるようになったので、その様を共有したいなと思います🐳
      </p>
      <h3>準備するもの</h3>
      <p>
        インストール済みの状態である前提で話していきます。<br />
        VTube Studio はトラッキングのためアプリ側で課金が必要です。<br />
        ※以下は全てダウンロードリンクになっています。
      </p>
      <ul>
        <li><a href="https://discord.com/download" target="_blank" rel="noreferrer">Discord</a></li>
        <li><a href="https://store.steampowered.com/app/1325860/VTube_Studio/" target="_blank" rel="noreferrer">VTube Studio</a></li>
        <li><a href="https://obsproject.com/ja/download" target="_blank" rel="noreferrer">OBS</a></li>
        <li><a href="https://www.xsplit.com/ja/broadcaster" target="_blank" rel="noreferrer">XSplit Broadcaster</a></li>
      </ul>
      <h3>手順</h3>
      <p>
        配信用ツールとして OBS、共演者とのやりとりとして Discord、自分のアバターを動かすものとして VTube Studio、共演者に VTube Studio の自分を伝えるために XSplit Broadcaster を起動します。
      </p>
      <p className="kh-show-image">
        <img src={img_prepare} alt="準備画面" />
      </p>
      <p>
        XSplit Broadcaster で OBS のように<br />
        [Add Source] -&gt; [Screen Capture] -&gt; [Window Capture] -&gt; [VTube Studio (VTube Studio.exe)]<br />
        として VTube Studio を表示します。<br />
        ※ OBS のように Alt 押しながらウィンドウの端を左クリックしてクリップ可能
      </p>
      <p className="kh-show-image">
        <img src={img_xsplit01} alt="XSplit Broadcaster の設定" />
      </p>
      <p>
        このあとミラーしておくと配信時に反転しなくてすむので反転させておきます。<br />
        [Window "VTubeStudio" in "vtube studio.exe" process] を右クリックしてプロパティを表示。<br />
        [Layout] のタブから [2D/3D Transform] の項目の左右を反転しそうな Flip アイコンを選択しておきます。
      </p>
      <p className="kh-show-image">
        <img src={img_xsplit02} alt="XSplit Broadcaster で反転" />
      </p>
      <p>
        Discord での操作に移ります。<br />
        まずは設定アイコンを押します。
      </p>
      <p className="kh-show-image">
        <img src={img_discord01} alt="Discord の設定アイコンを選択" />
      </p>
      <p>
        設定中段にある [音声・ビデオ] の中段にある [ビデオ設定] の項目でカメラに [XSplitBroadcaster] を選択。<br />
        念の為、[ビデオをテスト] で表示されるかを確認します。
      </p>
      <p className="kh-show-image">
        <img src={img_discord02} alt="Discord のビデオの設定" />
      </p>
      <p>
        共演者とやりとりするボイスチャンネルに入り、 [WEB カメラ] のボタンを押して VTube Studio の内容が表示されるか確認します。<br />
      </p>
      <p className="kh-show-image">
        <img src={img_discord03} alt="Discord で WEB カメラで起動" />
      </p>
      <p>
        あとは、 OBS で Discord をウィンドウキャプチャしてクロマキーで緑を抜けば共演者と一緒にぬるぬる動けます！<br />
        一人で設定の確認もできるのでこだわりのある方は一度この方法試してみてはいかがでしょうか？<br />
        相当な CPU やネットワークを消費するのでご利用は計画的に。
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

const Head: React.FC = () => {
  const title = 'VTube Studio と Discord を使って共演 VTuber をぬるぬる動かす';
  const url = 'https://amabie-labo.com/know_how/streaming01';
  const description = '共演者や自分を共演者の配信画面上でぬるぬる動かすための方法についてお伝えします。';
  const img = `https://amabie-labo.com${img_vtube_studio_x_discord}`;
  return (
    <Helmet>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={img} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
}

export default Index;
