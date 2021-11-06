import React from 'react';
import '../../styles/Tool/Base.scss';
import { Link } from 'react-router-dom';
import img_pikopiko_obs_x_discord from '../../images/tool/pikopiko-obs-x-discord.png';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Index: React.FC = () => {
  return (
    <div className="t-index">
      <Head />
      <h2>便利ツール</h2>
      <p>僕も配信者の端くれなので役立ちそうなツールをアップしていきます🐳</p>
      <ul>
        <li><Link to="tool/pikopiko"><img src={img_pikopiko_obs_x_discord} alt="VTube Studio と Discord を使って共演VTuberをぬるぬる動かす" /></Link></li>
      </ul>

      <BackButton />
    </div>
  );
}

const BackButton: React.FC = () => {
  return (
    <div className="t-pikopiko-back-button">
      <Link to='/'>
        &lt; 戻る
      </Link>
    </div>
  );
}

const Head: React.FC = () => {
  const title = '便利ツール';
  const type = 'website';
  const img = `https://amabie-labo.com${img_pikopiko_obs_x_discord}`;
  const url = 'https://amabie-labo.com/tool';
  const description = '便利ツールです';
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
