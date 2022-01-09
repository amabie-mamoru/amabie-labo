import React from 'react';
import { Tweet } from 'react-twitter-widgets';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../../../styles/GameArticle/Base.scss';
import img_thumb from '../../../images/game-article/pokemon/sword-x-shield02/metronome-battle.png';
import img_party from '../../../images/game-article/pokemon/sword-x-shield02/party.jpg';
import img_detail from '../../../images/game-article/pokemon/sword-x-shield01/detail.png';
import img_ranking from '../../../images/game-article/pokemon/sword-x-shield01/ranking.png';
import { PokemonIcon } from './MonsterHelper';

import ReactGA from 'react-ga';

const SwordShield02: React.FC = () => {
  return (
    <div className="ga-show">
      <Head />
      <h2>【新春！おみくじバトル】ハチマキロンゲで運ゲ【最終n位】</h2>
      <p className="ga-show-timestamp">2021.01.10</p>
      <p className="ga-show-image">
        <img src={img_party} alt="構築" />
      </p>
      <p>
        こんびえ〜🧜‍♂️天日江護です🐳<br />
        今回は公式の大会で良い感じの成績を残したので紹介します⛱
      </p>
      <h3>大会の概要</h3>
      <p>
        公式ホームページがないので当時のツイートと攻略サイトから引用しますね🧜‍♂️
      </p>
      <p className="ga-show-tweet">
      <Tweet tweetId="1473881083653627905" />
      </p>
      <h3>構築のコンセプト</h3>
      <p className="ga-show-poke">
        受けPTは嫌だけど勝率を上げたかったので破壊の一手としてハチマキ<PokemonIcon name="オーロンゲ" />から構築を考えた。<br />
        火力全振りだと<PokemonIcon name="ヨノワール" /><PokemonIcon name="サマヨール" /><PokemonIcon name="カビゴン" />でくるくるされてるだけで負けそうだったので、初手に<PokemonIcon name="オーロンゲ" />で荒らして押し切れるならそのまま押し切りつつ押し切られそうならTODも視野に入れた。
      </p>
      <h3>個体紹介</h3>
      <p className="ga-show-poke">
        <p className="ga-show-poke-profile">
          <PokemonIcon name="オーロンゲ" />オーロンゲ@こだわりハチマキ
        </p>
        <p>
          特性：いたずらごころ<br />
          性格：ゆうかん<br />
          実数値：202(252)-189(252)-86(4)-115-95-64<br />
          技構成：ゆびをふる
        </p>
        <p className="ga-show-poke-desc">
          構築の主軸。<br />
          PT の一番上に<PokemonIcon name="イエッサン♀" />を置くことでサイコフィールドを匂わせて、悪戯心でないように見せかけたが全く意味はなかった。<br />
          むしろ終盤は<PokemonIcon name="オーロンゲ" />対面することが多く、特性：悪戯心による指振りは、悪タイプ相手に攻撃技すら失敗するので、ハチマキ持たせるとしても特性は悪い手癖推奨。<br />
          <del>特性パッチをケチりたくて</del>お見通しと迷ったが、皆持ち物は似たり寄ったりだと思ったので先制できることを優先した。<br />
          悪戯心での採用だったので素早さはいらなかったので性格は勇敢で採用。<br />
          C が少し高くて嬉しい場面も多かったので悪い手癖だろうが個人的には S↓ 性格がいいと思う。
        </p>
      </p>
      <p>
        <p className="ga-show-poke-profile">
          <PokemonIcon name="カビゴン" />カビゴン@たべのこし
        </p>
        <p>
          特性：めんえき<br />
          性格：わんぱく<br />
          実数値：258(184)-130-128(252)-76-140(80)-50<br />
          技構成：ゆびをふる
        </p>
        <p className="ga-show-poke-desc">
          <del>くいしんぼう個体の流用なので</del>個体値は雑。<br />
          毒による回復ソースを失うリスクの方が高かったので免疫採用。<br />
          性格の補正が腕白な理由は C は確保しても信用ならないので S を優先。これするならちょっと S に振ってもよかったかも。<br />
          大会終盤はジャポの実を持った<PokemonIcon name="オーロンゲ" />によくあたったので、選出画面で<PokemonIcon name="オーロンゲ" />を見たら<PokemonIcon name="カビゴン" />は基本殴らずに見せるだけ見せて指振るのは<PokemonIcon name="ゲンガー" />にお任せ。<br />
          もし殴ってしまうとジャポの実を食べた後、悪い手癖で食べ残しを奪われてしまうので要注意。<br />
          むしろ<PokemonIcon name="ゲンガー" />で殴れれば黒いヘドロを奪わせて相手が毎ターン自滅していくので積極的に<PokemonIcon name="ゲンガー" />を投げた。<br />
          怪我の巧妙か、僕の<PokemonIcon name="オーロンゲ" />は相手の<PokemonIcon name="オーロンゲ" />に投げれないので、ハチマキをパクられて一方的に殴り負けることはなかった。
        </p>
      </p>
      <p>
        <p className="ga-show-poke-profile">
          <PokemonIcon name="ゲンガー" />ゲンガー@くろいヘドロ
        </p>
        特性：のろわれボディ<br />
        性格：のんき<br />
        実数値：167(252)-85-102(104)-150-114(152)-117<br />
        技構成：ゆびをふる
      </p>
      <p className="ga-show-poke-desc">
        何かの PT の流用なので個体値は雑。<br />
        被弾が増えることを想定していたので S を下げてでも B と D に振った。<br />
        呪われボディは相手が積んでしまったときのリセット目的であえて被弾のために投げるシーンもあった。<br />
        <PokemonIcon name="カビゴン" />との補完が優秀で、ゴーストダイブ / シャドーダイブ / ロケット頭突きなどの高威力溜め攻撃が出た時の引き先としてゴースト系で固めるよりも強みを発揮した。<br />
      </p>
      <p>
        <p className="ga-show-poke-profile">
          <PokemonIcon name="イエッサン♀" /><PokemonIcon name="ハピナス" /><PokemonIcon name="サマヨール" />補欠。
        </p>
        <p className="ga-show-poke-desc">
          選出を絞らせないようにするために野生のポケモンを捕まえてそのまま採用。<br />
          強いて言うなら<br />
          <PokemonIcon name="イエッサン♀" />は<PokemonIcon name="オーロンゲ" />の悪戯心を悟らせないため<br />
          <PokemonIcon name="ハピナス" />は食べ残しの所在をわかりにくくするため<br />
          <PokemonIcon name="サマヨール" />はプレッシャーがこちらにもいるように見せかけたかったため
        </p>
      </p>
      <h3>選出例</h3>
      <p className="ga-show-poke">
        <PokemonIcon name="オーロンゲ" /><PokemonIcon name="カビゴン" /><PokemonIcon name="ゲンガー" />固定。<br />
        というか、それ以外 PP も増やしてないし持ち物も適当なので選出してはいけないw<br />
        あとは<PokemonIcon name="オーロンゲ" />の自覚次第。Let's おみくじ！
      </p>
      <h3>立ち回り</h3>
      <p className="ga-show-poke">
        特に多かった構築に対する立ち振る舞いを解説。<br /><br />

        <p className="ga-show-poke-profile">
          対<PokemonIcon name="ゲンガー" /><PokemonIcon name="ヨノワール" /><PokemonIcon name="サマヨール" />プレッシャーサイクル<br />
        </p>
        <PokemonIcon name="オーロンゲ" />で PP が尽きるまで誰相手でも殴れるだけ殴る。<br />
        <PokemonIcon name="ヨノワール" />は食べ残し持ちがほとんどのため、<PokemonIcon name="オーロンゲ" />が場を荒らしたあとは、<PokemonIcon name="カビゴン" /><PokemonIcon name="ゲンガー" />で交代連打して一切殴らないようにした。<br />
        殴ると PP を消費するだけでなく、アンカーショット/食らいつく/影縫/背水の陣/バインド系の技を受けた時に悪あがきするリスクがあるので殴ってた試合は負けたが、殴らず交換だけを繰り返していたら食べ残しとヘドロの回復で相手の PP 16 回が枯れることの方が多かった。<br />
        <PokemonIcon name="ヨノワール" />だけでいいから PP は必ず数えること。<br />
        正直一撃技や相手の積み、やけどされる技、はたき落とすやトリックを引く試行回数を増やしてしまうが、相手の自爆やマヒを引くこともあったので気にせず交換連打した。<br />
        <PokemonIcon name="ゲンガー" />の呪われボディか<PokemonIcon name="ヨノワール" />交代のタイミングでゆびを振ったり<PokemonIcon name="オーロンゲ" />に交代して相手に負荷をかければ勝てる試合が多かった。<br /><br />

        <p className="ga-show-poke-profile">
          対<PokemonIcon name="ゲンガー" /><PokemonIcon name="オーロンゲ" /><PokemonIcon name="ヨノワール" />悪い手癖オーロンゲ
        </p>
        <PokemonIcon name="オーロンゲ" />の初手の攻撃でだいたい決まる。<br />
        相手が悪い手癖使いならその対策に<PokemonIcon name="ゲンガー" />から入られることが多かった。<br />
        だが初手で<PokemonIcon name="ゲンガー" />よりも先に動くのを見られると<PokemonIcon name="オーロンゲ" />に交代されるので、<PokemonIcon name="ゲンガー" />を後投げして、そこからは<PokemonIcon name="ゲンガー" />の自覚に頼る。<br />
        相手の<PokemonIcon name="オーロンゲ" />が<PokemonIcon name="ゲンガー" />のヘドロをパクったらジャボでもアッキでも<PokemonIcon name="カビゴン" />に引いて戦えば勝てることが多い。<br />
        プレッシャーサイクル同様、<PokemonIcon name="ヨノワール" />に対しては<PokemonIcon name="カビゴン" /><PokemonIcon name="ゲンガー" />の交換連打になるのでやはり<PokemonIcon name="オーロンゲ" />は鉢巻でも悪い手癖にしとけば鉢巻バレしてない時に圧力になるのでやっぱり<PokemonIcon name="オーロンゲ" />の特性は反省点。
      </p>
      <h3>結果</h3>
      <p>
        規模感としてはn人が参加した大会で結果としてn位を達成できました🐳
      </p>
      <p className="ga-show-image-double">
      </p>
      <h3>おまけ</h3>
      <p>
        動画があるので興味ある方は是非🧜‍♂️
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

const Head: React.FC = () => {
  const title = '【新春！おみくじバトル】ハチマキロンゲで運ゲ【最終n位】';
  const type = 'article';
  const img = `https://amabie-labo.com${img_thumb}`;
  const url = 'https://amabie-labo.com/game_article/pokemon/sword_x_shield02';
  const description = '【新春！おみくじバトル】ハチマキロンゲで運ゲ【最終n位】のときのポケモン剣盾構築記事です。';
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

export default SwordShield02;
