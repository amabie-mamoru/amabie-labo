import React from 'react';
import '../../styles/MurderMystery/Index.scss';
import eosj from '../../images/murder-mystery/end-of-space-journey-banner.png';
import eosjas from '../../images/murder-mystery/end-of-space-journey-another-story-banner.png';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  return (
    <div className="mm-index">
      <h2>マーダーミステリー作品一覧</h2>
      <div className="mm-index__work">
        <Link to='/murder_mystery/end_of_space_journey'>
          <img className="mm-index__work-list-image" src={eosj} />
        </Link>
      </div>
      <div className="mm-index__work">
        <Link to='/murder_mystery/end_of_space_journey'>
          <img className="mm-index__work-list-image" src={eosjas} />
        </Link>
      </div>
    </div>
  );
}

export default Index;
