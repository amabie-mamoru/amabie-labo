import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../../../styles/GameArticle/Base.scss';
import img_thumb from '../../../images/game-article/pokemon/sword-x-shield01/flareon-strongest-battle.png';
import img_party from '../../../images/game-article/pokemon/sword-x-shield01/party.jpg';
import img_detail from '../../../images/game-article/pokemon/sword-x-shield01/detail.png';
import img_ranking from '../../../images/game-article/pokemon/sword-x-shield01/ranking.png';
import img_result from '../../../images/game-article/pokemon/sword-x-shield01/result.jpg';
import ico_cryogonal from '../../../images/game-article/pokemon/Cryogonal.gif';
import ico_dragalge from '../../../images/game-article/pokemon/Dragalge.gif';
import ico_flareon from '../../../images/game-article/pokemon/Flareon.gif';
import ico_klefki from '../../../images/game-article/pokemon/Klefki.gif';
import ico_tangrowth from '../../../images/game-article/pokemon/Tangrowth.gif';
import ico_wailord from '../../../images/game-article/pokemon/Wailord.gif';

import ReactGA from 'react-ga';

const SwordShield01: React.FC = () => {
  return (
    <div className="ga-show">
      <Head />
      <h2>【ブースターさいきょうけっていせん】ブースターのド根性【最終8位】</h2>
      <p className="ga-show-timestamp">2021.12.27</p>
      <p className="ga-show-image">
        <img src={img_party} alt="構築" />
      </p>
      <p>
        こんびえ〜🧜‍♂️天日江護です🐳<br />
        過去の仲間大会ですがポケモンの実績を残しておこうと思って構築を公開していくことにしました⛱ <br />
      </p>
      <h3>大会の概要</h3>
      <p>
        発端はポケソルさんとバンビーさんのコラボ動画をご覧ください👇
      </p>
      <p className="ga-show-image">
        <iframe src="https://www.youtube.com/embed/_aG-hz5YJso" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
      </p>
      <h3>構築のコンセプト</h3>
      <p className="ga-show-poke">
        初手ダイマならぬ初手<img src={ico_flareon} alt="ブースター" />で圧をかける構築
      </p>
      <h3>個体紹介</h3>
      <p className="ga-show-poke">
        <p className="ga-show-poke-profile">
          <img src={ico_flareon} alt="ブースター" />ブースター@どくどくだま
        </p>
        <p>
          特性：こんじょう<br />
          性格：ようき<br />
          実数値：141(4)-182(252)-80-*-130-128(252)<br />
          技構成：フレアドライブ / からげんき / あくび / まもる
        </p>
        <p className="ga-show-poke-desc">
          構築の主軸。<br />
          初手 <img src={ico_klefki} alt="クレッフィ" />が多そうだなと思ったので先に展開を阻害する意味で初手要員に採用。<br />
          <img src={ico_flareon} alt="ブースター" />はパワフルハーブ穴を掘る警戒でまもる。<br />
          <img src={ico_klefki} alt="クレッフィ" />は電磁波警戒でまもる。<br />
          それ以外は初手対面しなかった気がする。
        </p>
      </p>
      <p>
        <p className="ga-show-poke-profile">
          <img src={ico_dragalge} alt="ドラミドロ" />ドラミドロ@イバンのみ
        </p>
        <p>
          特性：てきおうりょく<br />
          性格：ひかえめ<br />
          実数値：172(252)-*-111(4)-163(252)-143-64<br />
          技構成：ヘドロウェーブ / りゅうせいぐん / ねっとう / こらえる
        </p>
        <p className="ga-show-poke-desc">
          <img src={ico_flareon} alt="ブースター" />が<img src={ico_wailord} alt="ホエルオー" />と対面したときの引き先。<br />
          <img src={ico_tangrowth} alt="モジャンボ" />の幻影に怯えてもらって地震より冷Bを打ってもらえるかなと期待。<br />
          冷Bなら2耐えするし、いざとなれば堪えるイバンで乱数勝負以上ができる。<br />
          H は偶数はやめよう。
        </p>
      </p>
      <p>
        <p className="ga-show-poke-profile">
          <img src={ico_klefki} alt="クレッフィ" />クレッフィ@たべのこし
        </p>
        特性：いたずらごころ<br />
        性格：ひかえめ<br />
        実数値：164(252)-*-111-144(248)-107-97(8)<br />
        技構成：みがわり / めいそう / でんじふゆう / ラスターカノン
      </p>
      <p className="ga-show-poke-desc">
        ここまでで <img src={ico_dragalge} alt="ドラミドロ" />の受けが成立しないので採用。<br />
        クレフ対面に強く出たかったのでC特化してラスカに瞑想も完備。後続に身代わりは残させない立ち回りを心がけた。<br />
        <img src={ico_tangrowth} alt="モジャンボ" />は<img src={ico_flareon} alt="ブースター" />でも<img src={ico_dragalge} alt="ドラミドロ" />でもワンパンできるが、先に葉緑素を展開されたときに受けが成立しないので悪戯心電磁浮遊でガンメタして日差しがなくなるまで無力化した。<br />
        食べ残し持ちで H が 4n なこと以外は環境に特化した優秀な子。
      </p>
      <p>
        <p className="ga-show-poke-profile">
          <img src={ico_wailord} alt="ホエルオー" /><img src={ico_tangrowth} alt="モジャンボ" /><img src={ico_cryogonal} alt="フリージオ" />補欠
        </p>
        <p className="ga-show-poke-desc">
          選出を絞らせないようにするために野生のポケモンを捕まえてそのまま採用。
        </p>
      </p>
      <h3>選出例</h3>
      <p className="ga-show-poke">
        今回は大会の性質上、選出を迷う意味がないので <img src={ico_flareon} alt="ブースター" /><img src={ico_dragalge} alt="ドラミドロ" /><img src={ico_klefki} alt="クレッフィ" /> で確定。
      </p>
      <h3>結果</h3>
      <p>
        規模感としては818人が参加した大会で結果として8位を達成できました🐳
      </p>
      <p className="ga-show-image-double">
        <img src={img_detail} alt="規模感" /><img src={img_ranking} alt="ランキング" />
      </p>
      <h3>おまけ</h3>
      <p>
        生放送のアーカイブがあるので興味ある方は是非🧜‍♂️
      </p>
      <p className="ga-show-image">
        <iframe src="https://www.youtube.com/embed/wFWARedo2Wg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
      </p>
      <BackButton />
    </div>
  );
}

const BackButton: React.FC = () => {
  return (
    <div className="kh-show-back-button">
      <Link to='/game_article/pokemon'>
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
    <div className="ga-show-quote">
      <div className="ga-show-quote-content">
        <a href={link} target="_blank" rel="noreferrer">
          <p>{title}</p>
          <p className="ga-show-quote-content-description">{description}</p>
          <img src={imgUrl} alt={title} />
        </a>
      </div>
    </div>
  )
}

const Head: React.FC = () => {
  const title = '';
  const type = 'article';
  const img = `https://amabie-labo.com${img_thumb}`;
  const url = 'https://amabie-labo.com/game_article/pokemon/sword_x_shield01';
  const description = '共演者や自分を共演者の配信画面上でぬるぬる動かすための方法についてお伝えします。';
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

export default SwordShield01;

