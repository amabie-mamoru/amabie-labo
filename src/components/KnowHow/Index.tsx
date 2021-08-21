import React from 'react';
import '../../styles/KnowHow/Base.scss';
import { Link } from 'react-router-dom';
import img_vtube_studio_x_discord from '../../images/know-how/vtube-studio-x-discord.png';

const Index: React.FC = () => {
  return (
    <div className="kh-index">
      <h2>配信お役立ち情報</h2>
      <p>僕も配信者の端くれなので役立ちそうな情報をアップしていきます🐳</p>
      <ul>
        <li><Link to="know_how/streaming01"><img src={img_vtube_studio_x_discord} alt="VTube Studio と Discord を使って共演VTuberをぬるぬる動かす" /></Link></li>
      </ul>
    </div>
  );
}

export default Index;
