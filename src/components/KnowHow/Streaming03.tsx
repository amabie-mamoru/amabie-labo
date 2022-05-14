import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../../styles/KnowHow/Base.scss';
import img_audio_troubleshooting01 from '../../images/know-how/audio-troubleshooting/audio-troubleshooting01.png'
import img_audio_troubleshooting02 from '../../images/know-how/audio-troubleshooting/audio-troubleshooting02.png'
import img_audio_troubleshooting03 from '../../images/know-how/audio-troubleshooting/audio-troubleshooting03.png'
import img_audio_troubleshooting04 from '../../images/know-how/audio-troubleshooting/audio-troubleshooting04.png'
import img_audio_troubleshooting05 from '../../images/know-how/audio-troubleshooting/audio-troubleshooting05.png'
import img_vtube_studio_x_discord from '../../images/know-how/vtube-studio-x-discord.png';
import img_audio_troubleshooting from '../../images/know-how/audio-troubleshooting.png';
import ReactGA from 'react-ga';

const Index: React.FC = () => {
  return (
    <div className="kh-show">
      <Head />
      <h2>OBS で音ズレする際のトラブルシューティング</h2>
      <p className="kh-show-timestamp">2022.05.14</p>
      <p>
        こんびえ〜🧜‍♂️天日江護です🐳<br />
        今回は以前以下のような記事を上げたのですが、音ズレが発生するようになったのでその解決方法の共有記事です！<br />
      </p>
      <p className="kh-show-image">
        <a href="/know_how/streaming01">
          <img src={img_vtube_studio_x_discord} alt="VTube Studio と Discord を使って共演 VTuber をぬるぬる動かす" width="400" />
        </a>
      </p>
      <h3>背景</h3>
      <p>
        まずはどれくらい音ズレしているのかみてみてください。
      </p>
      <p className="ga-show-image">
        <iframe src="https://www.youtube.com/embed/dMWuYb4kbdQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
      </p>
      <p>
        かなりひどいですよね...<br />
        原因がわからなかったのが困りました😭<br />
        <ul>
          <li>配信中 Discord からは遅延なく聞こえている</li>
          <li>配信中ゲーム音は一致している</li>
          <li>Discord のお相手の声だけ音ズレしている</li>
        </ul>
        もし同様の事象で困っている方にはこの記事は解決策の一つとなるかもしれません。<br />
        なお、この検証は OBS バージョン 27.2.4 (64-bit, windows) での検証結果です。
      </p>
      <h3>原因特定</h3>
      <p>
        結論から言うとデスクトップ音声が遅延していました🐢 <br />
        上記を見る限り Discord 側の問題のような気もしますが
        <ul>
          <li>Switch の音声は映像キャプチャで別音源として出力していた</li>
          <li>Discord の音声はデスクトップ音声として出力していた</li>
          <li>声はマイク音声として出力していた</li>
          <li>試しに同じ状況を再現して YouTube を流してみたら YouTube 音声も遅延していた</li>
        </ul>
        このことからデスクトップ音声が遅延していたことが判明しました。<br />
        <br />
        そもそもデスクトップ音声なんて遅延しようがなさそうな気もしました。<br />
        むしろデスクトップ音声が遅延するほど CPU 負荷が高いなら他の音声も遅延したり配信自体ができなくなりそうだなと。<br />
        でも、実際には CPU 負荷は高めでしたが、配信が止まるほどではなかったので、設定を見直しました。<br />
        そして色々いじっているうちに解決できたという具合です🐳<br /><br />
      </p>
      <h3>解決方法</h3>
      <p>
        早速今回の事例についてみていきましょう🧜‍♂️
      </p>
      <p>
        まずはグローバル設定を見返します。
      </p>
      <p className="kh-show-image">
        <img src={img_audio_troubleshooting01} alt="設定"/>
      </p>
      <p>
        この中の[音声]の項目をみたところ、グローバル音量は規定になっていました。<br />
        ここは個人的にはこのままでよいと思っています。なぜなら、後述するローカル音声に上書きされると思っているからです。
      </p>
      <p className="kh-show-image">
        <img src={img_audio_troubleshooting02} alt="音声グローバル設定" />
      </p>
      <p>
        次に、ローカル音量設定をみていきます。<br />
        音量ミキサーの[歯車マーク]から[プロパティ]をクリックします。
      </p>
      <p className="kh-show-image">
        <img src={img_audio_troubleshooting03} alt="ローカル設定" />
      </p>
      <p>
        設定は以下のように[規定]となっており、これが原因と考え、ヘッドホンやスピーカーを直接指定して決定すると解消されました。
      </p>
      <p className="kh-show-image">
        <img src={img_audio_troubleshooting04} alt="音量ローカル設定" />
      </p>
      <p>
        実際のデスクトップ音声を出力しているデバイスはみてる方の環境とも違うので以下のように YouTube を垂れ流しにしたまま設定を色々変えてみて、音量ゲージが反応したものに設定しましょう！
      </p>
      <p className="kh-show-image">
        <img src={img_audio_troubleshooting05} alt="音量比較" />
      </p>
      <h3>原因の分析</h3>
      <p>
        OBS のソースコードはブラックボックスなので、ここからはあくまで仮説です。<br />
        原因は[規定]を指定した際の処理によるものではないかと思います。<br />
        OBS は突然音声デバイスを外してもクラッシュしないように他の音声デバイスを探してそちらを出力する or 音声を出力しないような挙動を取ります。<br />
        このことから、規定にしていると逐次さまざまな音声デバイスにアクセスして入力状態を管理していると思われます。<br />
        そこで、今回のように PC の CPU 負荷が高い状態かつ複数音声を出力するデバイスがある状態で[規定]にしていると、OBS がデバイス探索をする時間だけ遅延してしまい、音ズレが発生するのではないかと考えています。<br />
        僕の場合はこれを実際にデスクトップ音声を出力しているデバイスに変更することで、デバイスを探索する CPU 負荷が減るためか遅延なく配信できることを確認しました。<br />
        前述の通りあくまで仮説であり、同じ症状でもサンプリングレートを変更したり Discord の出力先をバーチャル音声出力デバイスに設定して、それを OBS で出力することで解決できるような方もいるかもしれません。<br />
        もしこの記事で問題が解消される方がいれば幸いです🐳
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
  const title = 'OBSで音ズレする際のトラブルシューティング';
  const type = 'article';
  const img = `https://amabie-labo.com${img_audio_troubleshooting}`;
  const url = 'https://amabie-labo.com/know_how/streaming03';
  const description = 'OBSで音ズレする際のトラブルシューティングの一例を説明します。';
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

