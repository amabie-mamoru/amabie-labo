import React from 'react';
import '../../styles/KnowHow/Base.scss';
import { Link } from 'react-router-dom';
import img_vtube_studio_x_discord from '../../images/know-how/vtube-studio-x-discord.png';
import Helmet from 'react-helmet';

const Index: React.FC = () => {
  return (
    <div className="kh-index">
      <Head />
      <h2>配信お役立ち情報</h2>
      <p>僕も配信者の端くれなので役立ちそうな情報をアップしていきます🐳</p>
      <ul>
        <li><Link to="know_how/streaming01"><img src={img_vtube_studio_x_discord} alt="VTube Studio と Discord を使って共演VTuberをぬるぬる動かす" /></Link></li>
      </ul>
    </div>
  );
}

const Head: React.FC = () => {
  const title = '配信お役立ち情報';
  const type = 'article';
  const img = `https://amabie-labo.com${img_vtube_studio_x_discord}`;
  const url = 'https://amabie-labo.com/know_how';
  const description = '配信のお役立ち情報です';
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
