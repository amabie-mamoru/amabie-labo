import React from 'react';
import '../../styles/KnowHow/Base.scss';
import { Link } from 'react-router-dom';
import img_pikopiko_obs_x_discord from '../../images/know-how/pikopiko-obs-x-discord.png';
import img_vtube_studio_x_discord from '../../images/know-how/vtube-studio-x-discord.png';
import know_how_streaming from '../../images/homepage-know-how-streaming-banner.png';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Index: React.FC = () => {
  return (
    <div className="kh-index">
      <Head />
      <h2>配信お役立ち情報</h2>
      <p>僕も配信者の端くれなので役立ちそうな情報をアップしていきます🐳</p>
      <ul>
        <li><Link to="know_how/streaming01"><img src={img_vtube_studio_x_discord} alt="VTube Studio と Discord を使って共演VTuberをぬるぬる動かす" /></Link></li>
        <li><Link to="know_how/streaming02"><img src={img_pikopiko_obs_x_discord} alt="「OBSでピコピコを楽に生成ツール」の使い方" /></Link></li>
      </ul>
    </div>
  );
}

const Head: React.FC = () => {
  const title = '配信お役立ち情報';
  const type = 'article';
  const img = `https://amabie-labo.com${know_how_streaming}`;
  const url = 'https://amabie-labo.com/know_how';
  const description = '配信のお役立ち情報です';
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
