import React from 'react';
import '../../styles/MurderMystery/EndOfSpaceJourneyAnotherStory.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import eosjas from '../../images/murder-mystery/end-of-space-journey-another-story-banner.png';
import prologue1 from '../../images/murder-mystery/eosjas/prologue1.png';
import selectRole from '../../images/murder-mystery/eosjas/select-role.png';
import prologue2 from '../../images/murder-mystery/eosjas/prologue2.png';
import map from '../../images/murder-mystery/eosjas/map.png';
import sharedInfo1 from '../../images/murder-mystery/eosjas/shared-info1.png';
import sharedInfo2 from '../../images/murder-mystery/eosjas/shared-info2.png';
import sharedInfo3 from '../../images/murder-mystery/eosjas/shared-info3.png';
import comYourInfo1 from '../../images/murder-mystery/eosjas/com/your-info1.png';
import comYourInfo2 from '../../images/murder-mystery/eosjas/com/your-info2.png';
import comYourInfo3 from '../../images/murder-mystery/eosjas/com/your-info3.png';
import msaYourInfo1 from '../../images/murder-mystery/eosjas/msa/your-info1.png';
import msaYourInfo2 from '../../images/murder-mystery/eosjas/msa/your-info2.png';
import msaYourInfo3 from '../../images/murder-mystery/eosjas/msa/your-info3.png';
import msbYourInfo1 from '../../images/murder-mystery/eosjas/msb/your-info1.png';
import msbYourInfo2 from '../../images/murder-mystery/eosjas/msb/your-info2.png';
import msbYourInfo3 from '../../images/murder-mystery/eosjas/msb/your-info3.png';
import psYourInfo1 from '../../images/murder-mystery/eosjas/ps/your-info1.png';
import psYourInfo2 from '../../images/murder-mystery/eosjas/ps/your-info2.png';
import psYourInfo3 from '../../images/murder-mystery/eosjas/ps/your-info3.png';
// --- com ---
import comEngineInfo1 from '../../images/murder-mystery/eosjas/com/engine/info1.png';
import comLaboInfo1 from '../../images/murder-mystery/eosjas/com/labo/info1.png';
import comStorageItem1 from '../../images/murder-mystery/eosjas/com/storage/item1.png';
import comNaviInfo1 from '../../images/murder-mystery/eosjas/com/navi/info1.png';
import comCommInfo1 from '../../images/murder-mystery/eosjas/com/comm/info1.png';
import comCommItem1 from '../../images/murder-mystery/eosjas/com/comm/item1.png';
// --- msa ---
import msaEngineInfo1 from '../../images/murder-mystery/eosjas/msa/engine/info1.png';
import msaEngineInfo2 from '../../images/murder-mystery/eosjas/msa/engine/info2.png';
import msaLaboInfo1 from '../../images/murder-mystery/eosjas/msa/labo/info1.png';
import msaStorageInfo1 from '../../images/murder-mystery/eosjas/msa/storage/info1.png';
import msaNaviInfo1 from '../../images/murder-mystery/eosjas/msa/navi/info1.png';
import msaNaviInfo2 from '../../images/murder-mystery/eosjas/msa/navi/info2.png';
import msaCommInfo1 from '../../images/murder-mystery/eosjas/msa/comm/info1.png';
// -- msb ---
import msbEngineInfo1 from '../../images/murder-mystery/eosjas/msb/engine/info1.png';
import msbEngineInfo2 from '../../images/murder-mystery/eosjas/msb/engine/info2.png';
import msbLaboInfo1 from '../../images/murder-mystery/eosjas/msb/labo/info1.png';
import msbStorageItem1 from '../../images/murder-mystery/eosjas/msb/storage/item1.png';
import msbNaviInfo1 from '../../images/murder-mystery/eosjas/msb/navi/info1.png';
import msbNaviInfo2 from '../../images/murder-mystery/eosjas/msb/navi/info2.png';
import msbCommInfo1 from '../../images/murder-mystery/eosjas/msb/comm/info1.png';
import msbCommItem1 from '../../images/murder-mystery/eosjas/msb/comm/item1.png';
// --- ps ---
import psEngineInfo1 from '../../images/murder-mystery/eosjas/ps/engine/info1.png';
import psEngineItem1 from '../../images/murder-mystery/eosjas/ps/engine/item1.png';
import psLaboInfo1 from '../../images/murder-mystery/eosjas/ps/labo/info1.png';
import psLaboInfo2 from '../../images/murder-mystery/eosjas/ps/labo/info2.png';
import psLaboInfo3 from '../../images/murder-mystery/eosjas/ps/labo/info3.png';
import psStorageItem1 from '../../images/murder-mystery/eosjas/ps/storage/item1.png';
import psNaviInfo1 from '../../images/murder-mystery/eosjas/ps/navi/info1.png';
import psCommInfo1 from '../../images/murder-mystery/eosjas/ps/comm/info1.png';

interface IState {
  greenBack: boolean;
  role: string;
  docType: string;
  url: string;
  room: string;
}

export default class EndOfSpaceJourneyAnotherStory extends React.Component<{}, IState> {
  constructor (props: any) {
    super(props);
    this.state = {
      greenBack: false,
      role: '',
      docType: '',
      url: '',
      room: ''
    };
    this.ToggleGreenBack = this.ToggleGreenBack.bind(this);
    this.SetRole = this.SetRole.bind(this);
    this.SetRoom = this.SetRoom.bind(this);
    this.GetRoleClass = this.GetRoleClass.bind(this);
    this.GetRoomClass = this.GetRoomClass.bind(this);
    this.GetClass = this.GetClass.bind(this);
  }

  ToggleGreenBack () {
    this.setState(state => ({
      greenBack: !state.greenBack,
      role: state.role,
      docType: state.docType,
      url: state.url,
      room: state.room
    }));
  }

  SetRole (role: string) {
    this.setState(state => ({
      greenBack: state.greenBack,
      role: role,
      docType: state.docType,
      url: state.url,
      room: state.room
    }));
  }

  SetRoom (room: string) {
    this.setState(state => ({
      greenBack: state.greenBack,
      role: state.role,
      docType: state.docType,
      url: state.url,
      room: room
    }));
  }

  SetImage (docType: string, url: string) {
    this.setState(state => ({
      greenBack: state.greenBack,
      role: state.role,
      docType: docType,
      url: url,
      room: state.room
    }));
  }

  GetRoleClass = (buttonLabel: string) => {
    return buttonLabel === this.state.role ? 'active' : '';
  }

  GetRoomClass = (buttonLabel: string) => {
    return buttonLabel === this.state.room ? 'active' : '';
  }

  GetClass = (buttonLabel: string) => {
    return buttonLabel === this.state.url ? 'selected' : '';
  }

  render () {
    const contentClass = classNames('mm-eosjas__content-image', {
      'green-back': this.state.greenBack
    });

    let Image;
    if (this.state.url === '') {
      Image = <p>ここに画像が表示されます。</p>;
    } else if (this.state.docType === 'always') {
      // 悲しいかな時間がないのでむちゃくちゃだけど回避
      switch (this.state.url) {
        case 'prologue1':
          Image = <img src={prologue1} alt="プロローグ1" />;
          break;
        case 'selectRole':
          Image = <img src={selectRole} alt="役職選択" />;
          break;
        case 'prologue2':
          Image = <img src={prologue2} alt="プロローグ2" />;
          break;
        case 'map':
          Image = <img src={map} alt="マップ" />;
          break;
        case 'sharedInfo1':
          Image = <img src={sharedInfo1} alt="共有情報1" />;
          break;
        case 'sharedInfo2':
          Image = <img src={sharedInfo2} alt="共有情報2" />;
          break;
        case 'sharedInfo3':
          Image = <img src={sharedInfo3} alt="共有情報3" />;
          break;
        default:
          break;
      }
    } else if (this.state.docType === 'perRole') {
      if (this.state.role === '') {
        Image = <p>ここに画像が表示されます。</p>;
      }
      else if (this.state.role === 'Com') {
        switch(this.state.url) {
          case 'yourInfo1':
            Image = <img src={comYourInfo1} alt="あなたの情報1" />;
            break;
          case 'yourInfo2':
            Image = <img src={comYourInfo2} alt="あなたの情報2" />;
            break;
          case 'yourInfo3':
            Image = <img src={comYourInfo3} alt="あなたの情報3" />;
            break;
        }
      }
      else if (this.state.role === 'MSA') {
        switch(this.state.url) {
          case 'yourInfo1':
            Image = <img src={msaYourInfo1} alt="あなたの情報1" />;
            break;
          case 'yourInfo2':
            Image = <img src={msaYourInfo2} alt="あなたの情報2" />;
            break;
          case 'yourInfo3':
            Image = <img src={msaYourInfo3} alt="あなたの情報3" />;
            break;
        }
      }
      else if (this.state.role === 'MSB') {
        switch(this.state.url) {
          case 'yourInfo1':
            Image = <img src={msbYourInfo1} alt="あなたの情報1" />;
            break;
          case 'yourInfo2':
            Image = <img src={msbYourInfo2} alt="あなたの情報2" />;
            break;
          case 'yourInfo3':
            Image = <img src={msbYourInfo3} alt="あなたの情報3" />;
            break;
        }
      }
      else if (this.state.role === 'PS') {
        switch(this.state.url) {
          case 'yourInfo1':
            Image = <img src={psYourInfo1} alt="あなたの情報1" />;
            break;
          case 'yourInfo2':
            Image = <img src={psYourInfo2} alt="あなたの情報2" />;
            break;
          case 'yourInfo3':
            Image = <img src={psYourInfo3} alt="あなたの情報3" />;
            break;
        }
      }
    } else if (this.state.docType === 'perRoom') {
      if (this.state.room === 'engine') {
        if (this.state.role === 'Com') {
          switch(this.state.url) {
            case 'item1':
              Image = <p>アイテムはありません。</p>;
              break;
            case 'info1':
              Image = <img src={comEngineInfo1} alt="情報1" />;
              break;
            case 'info2':
              Image = <p>情報2はありません。</p>;
              break;
            case 'info3':
              Image = <p>情報3はありません。</p>;
              break;
          }
        } else if (this.state.role === 'MSA') {
          switch(this.state.url) {
            case 'item1':
              Image = <p>アイテムはありません。</p>;
              break;
            case 'info1':
              Image = <img src={msaEngineInfo1} alt="情報1" />;
              break;
            case 'info2':
              Image = <img src={msaEngineInfo2} alt="情報2" />;
              break;
            case 'info3':
              Image = <p>情報3はありません。</p>;
              break;
          }
        } else if (this.state.role === 'MSB') {
          switch(this.state.url) {
            case 'item1':
              Image = <p>アイテムはありません。</p>;
              break;
            case 'info1':
              Image = <img src={msbEngineInfo1} alt="情報1" />;
              break;
            case 'info2':
              Image = <img src={msbEngineInfo2} alt="情報2" />;
              break;
            case 'info3':
              Image = <p>情報3はありません。</p>;
              break;
          }
        } else if (this.state.role === 'PS') {
          switch(this.state.url) {
            case 'item1':
              Image = <img src={psEngineItem1} alt="アイテム1" />;
              break;
            case 'info1':
              Image = <img src={psEngineInfo1} alt="情報1" />;
              break;
            case 'info2':
              Image = <p>情報2はありません。</p>;
              break;
            case 'info3':
              Image = <p>情報3はありません。</p>;
              break;
          }
        }
      } else if (this.state.room === 'labo') {
        if (this.state.role === 'Com') {
          switch(this.state.url) {
            case 'item1':
              Image = <p>アイテムはありません。</p>;
              break;
            case 'info1':
              Image = <img src={comLaboInfo1} alt="情報1" />;
              break;
            case 'info2':
              Image = <p>情報2はありません。</p>;
              break;
            case 'info3':
              Image = <p>情報3はありません。</p>;
              break;
          }
        } else if (this.state.role === 'MSA') {
          switch(this.state.url) {
            case 'item1':
              Image = <p>アイテムはありません。</p>;
              break;
            case 'info1':
              Image = <img src={msaLaboInfo1} alt="情報1" />;
              break;
            case 'info2':
              Image = <p>情報2はありません。</p>;
              break;
            case 'info3':
              Image = <p>情報3はありません。</p>;
              break;
          }
        } else if (this.state.role === 'MSB') {
          switch(this.state.url) {
            case 'item1':
              Image = <p>アイテムはありません。</p>;
              break;
            case 'info1':
              Image = <img src={msbLaboInfo1} alt="情報1" />;
              break;
            case 'info2':
              Image = <p>情報2はありません。</p>;
              break;
            case 'info3':
              Image = <p>情報3はありません。</p>;
              break;
          }
        } else if (this.state.role === 'PS') {
          switch(this.state.url) {
            case 'item1':
              Image = <p>アイテムはありません。</p>;
              break;
            case 'info1':
              Image = <img src={psLaboInfo1} alt="情報1" />;
              break;
            case 'info2':
              Image = <img src={psLaboInfo2} alt="情報2" />;
              break;
            case 'info3':
              Image = <img src={psLaboInfo3} alt="情報3" />;
              break;
          }
        }
      } else if (this.state.room === 'storage') {
        if (this.state.role === 'Com') {
          switch(this.state.url) {
            case 'item1':
              Image = <img src={comStorageItem1} alt="アイテム1" />;
              break;
            case 'info1':
              Image = <p>情報1はありません。</p>;
              break;
            case 'info2':
              Image = <p>情報2はありません。</p>;
              break;
            case 'info3':
              Image = <p>情報3はありません。</p>;
              break;
          }
        } else if (this.state.role === 'MSA') {
          switch(this.state.url) {
            case 'item1':
              Image = <p>アイテムはありません。</p>;
              break;
            case 'info1':
              Image = <img src={msaStorageInfo1} alt="情報1" />;
              break;
            case 'info2':
              Image = <p>情報2はありません。</p>;
              break;
            case 'info3':
              Image = <p>情報3はありません。</p>;
              break;
          }
        } else if (this.state.role === 'MSB') {
          switch(this.state.url) {
            case 'item1':
              Image = <img src={msbStorageItem1} alt="アイテム1" />;
              break;
            case 'info1':
              Image = <p>情報1はありません。</p>;
              break;
            case 'info2':
              Image = <p>情報2はありません。</p>;
              break;
            case 'info3':
              Image = <p>情報3はありません。</p>;
              break;
          }
        } else if (this.state.role === 'PS') {
          switch(this.state.url) {
            case 'item1':
              Image = <img src={psStorageItem1} alt="アイテム1" />;
              break;
            case 'info1':
              Image = <p>情報1はありません。</p>;
              break;
            case 'info2':
              Image = <p>情報2はありません。</p>;
              break;
            case 'info3':
              Image = <p>情報3はありません。</p>;
              break;
          }
        }
      } else if (this.state.room === 'navi') {
        if (this.state.role === 'Com') {
          switch(this.state.url) {
            case 'item1':
              Image = <p>アイテムはありません。</p>;
              break;
            case 'info1':
              Image = <img src={comNaviInfo1} alt="情報1" />;
              break;
            case 'info2':
              Image = <p>情報2はありません。</p>;
              break;
            case 'info3':
              Image = <p>情報3はありません。</p>;
              break;
          }
        } else if (this.state.role === 'MSA') {
          switch(this.state.url) {
            case 'item1':
              Image = <p>アイテムはありません。</p>;
              break;
            case 'info1':
              Image = <img src={msaNaviInfo1} alt="情報1" />;
              break;
            case 'info2':
              Image = <img src={msaNaviInfo2} alt="情報2" />;
              break;
            case 'info3':
              Image = <p>情報3はありません。</p>;
              break;
          }
        } else if (this.state.role === 'MSB') {
          switch(this.state.url) {
            case 'item1':
              Image = <p>アイテムはありません。</p>;
              break;
            case 'info1':
              Image = <img src={msbNaviInfo1} alt="情報1" />;
              break;
            case 'info2':
              Image = <img src={msbNaviInfo2} alt="情報2" />;
              break;
            case 'info3':
              Image = <p>情報3はありません。</p>;
              break;
          }
        } else if (this.state.role === 'PS') {
          switch(this.state.url) {
            case 'item1':
              Image = <p>アイテムはありません。</p>;
              break;
            case 'info1':
              Image = <img src={psNaviInfo1} alt="情報1" />;
              break;
            case 'info2':
              Image = <p>情報2はありません。</p>;
              break;
            case 'info3':
              Image = <p>情報3はありません。</p>;
              break;
          }
        }
      } else if (this.state.room === 'comm') {
        if (this.state.role === 'Com') {
          switch(this.state.url) {
            case 'item1':
              Image = <img src={comCommItem1} alt="アイテム1" />;
              break;
            case 'info1':
              Image = <img src={comCommInfo1} alt="情報1" />;
              break;
            case 'info2':
              Image = <p>情報2はありません。</p>;
              break;
            case 'info3':
              Image = <p>情報3はありません。</p>;
              break;
          }
        } else if (this.state.role === 'MSA') {
          switch(this.state.url) {
            case 'item1':
              Image = <p>アイテムはありません。</p>;
              break;
            case 'info1':
              Image = <img src={msaCommInfo1} alt="情報1" />;
              break;
            case 'info2':
              Image = <p>情報2はありません。</p>;
              break;
            case 'info3':
              Image = <p>情報3はありません。</p>;
              break;
          }
        } else if (this.state.role === 'MSB') {
          switch(this.state.url) {
            case 'item1':
              Image = <img src={msbCommItem1} alt="アイテム1" />;
              break;
            case 'info1':
              Image = <img src={msbCommInfo1} alt="情報1" />;
              break;
            case 'info2':
              Image = <p>情報2はありません。</p>;
              break;
            case 'info3':
              Image = <p>情報3はありません。</p>;
              break;
          }
        } else if (this.state.role === 'PS') {
          switch(this.state.url) {
            case 'item1':
              Image = <p>アイテムはありません。</p>;
              break;
            case 'info1':
              Image = <img src={psCommInfo1} alt="情報1" />;
              break;
            case 'info2':
              Image = <p>情報2はありません。</p>;
              break;
            case 'info3':
              Image = <p>情報3はありません。</p>;
              break;
          }
        }
      }
    }

    return (
      <div className='mm-eosjas'>
        <Head />
        <div className="mm-eosjas__key-visual">
          <h2>スペースジャーニーの結末 - アナザーストーリー -</h2>
        </div>
        <div className="mm-eosjas__description">
          以下、GM の指示があったらボタンを押してください。<br />
          配信する場合は&nbsp;
          <button onClick={this.ToggleGreenBack}>
            グリーンバック
          </button>
          &nbsp;を押し、緑が全部入るように画面を調整してください。
        </div>
        <hr />
        <div className="mm-eosjas__content">
          <div className="mm-eosjas__content-layout">
            <div className={contentClass}>
              {Image}
            </div>
            <div className="mm-eosjas__content-actions">
              <section>
                <button className={this.GetClass('prologue1')} onClick={() => this.SetImage('always', 'prologue1')}>
                  プロローグ1
                </button>
                <button className={this.GetClass('selectRole')} onClick={() => this.SetImage('always', 'selectRole')}>
                  役職選択
                </button>
                <button className={this.GetClass('prologue2')} onClick={() => this.SetImage('always', 'prologue2')}>
                  プロローグ2
                </button>
              </section>
              <hr />
              <section>
                <button className={this.GetClass('map')} onClick={() => this.SetImage('always', 'map')}>
                  マップ
                </button>
              </section>
              <hr />
              <section>
                <button className={this.GetClass('sharedInfo1')} onClick={() => this.SetImage('always', 'sharedInfo1')}>
                  共有情報1
                </button>
                <button className={this.GetClass('sharedInfo2')} onClick={() => this.SetImage('always', 'sharedInfo2')}>
                  共有情報2
                </button>
                <button className={this.GetClass('sharedInfo3')} onClick={() => this.SetImage('always', 'sharedInfo3')}>
                  共有情報3
                </button>
              </section>
              <hr />
              <section>
                あなたの役職は<br />
                <button className={this.GetRoleClass('Com')} onClick={() => this.SetRole('Com')}>
                  コマンダー
                </button>
                <button className={this.GetRoleClass('MSA')} onClick={() => this.SetRole('MSA')}>
                  MS(A)
                </button>
                <button className={this.GetRoleClass('MSB')} onClick={() => this.SetRole('MSB')}>
                  MS(B)
                </button>
                <button className={this.GetRoleClass('PS')} onClick={() => this.SetRole('PS')}>
                  PS
                </button>
              </section>
              <section>
                <button className={this.GetClass('yourInfo1')} onClick={() => this.SetImage('perRole', 'yourInfo1')}>
                  あなたの情報1
                </button>
                <button className={this.GetClass('yourInfo2')} onClick={() => this.SetImage('perRole', 'yourInfo2')}>
                  あなたの情報2
                </button>
                <button className={this.GetClass('yourInfo3')} onClick={() => this.SetImage('perRole', 'yourInfo3')}>
                  あなたの情報3
                </button>
              </section>
              <hr />
              <section>
                <p>ここのボタンは部屋を移動したら押すことができます。</p>
                <button className={this.GetRoomClass('engine')} onClick={() => this.SetRoom('engine')}>
                  エンジンルーム
                </button>
                <button className={this.GetRoomClass('labo')} onClick={() => this.SetRoom('labo')}>
                  実験室
                </button>
                <button className={this.GetRoomClass('storage')} onClick={() => this.SetRoom('storage')}>
                  倉庫
                </button>
                <button className={this.GetRoomClass('navi')} onClick={() => this.SetRoom('navi')}>
                  操舵室
                </button>
                <button className={this.GetRoomClass('comm')} onClick={() => this.SetRoom('comm')}>
                  通信室
                </button>
              </section>
              <section>
                <button className={this.GetClass('item1')} onClick={() => this.SetImage('perRoom', 'item1')}>
                  アイテム1
                </button>
                <button className={this.GetClass('info1')} onClick={() => this.SetImage('perRoom', 'info1')}>
                  情報1
                </button>
                <button className={this.GetClass('info2')} onClick={() => this.SetImage('perRoom', 'info2')}>
                  情報2
                </button>
                <button className={this.GetClass('info3')} onClick={() => this.SetImage('perRoom', 'info3')}>
                  情報3
                </button>
                <p>※アイテムを受け渡ししたい場合は zip ファイルを解凍して<br />　png ファイルを会議室チャットに貼ってください。</p>
              </section>
            </div>
          </div>
        </div>
        <div className='back-button'>
          <Link to='/murder_mystery'>
            &lt; 戻る
          </Link>
        </div>
      </div>
    );
  }
}

const Head: React.FC = () => {
  const title = 'スペースジャーニーの結末 - アフターストーリー';
  const type = 'website';
  const img = `https://amabie-labo.com${eosjas}`;
  const url = 'https://amabie-labo.com/murder_mystery/end_of_space_journey_another_story';
  const description = 'スペースジャーニーの結末 - アフターストーリー の配信用便利ツールです';
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
