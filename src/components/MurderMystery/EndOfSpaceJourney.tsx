import React from 'react';
import '../../styles/MurderMystery/EndOfSpaceJourney.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import prologue1 from '../../images/murder-mystery/eosj/prologue1.png';
import selectRole from '../../images/murder-mystery/eosj/select-role.png';
import prologue2 from '../../images/murder-mystery/eosj/prologue2.png';
import map from '../../images/murder-mystery/eosj/map.png';
import sharedInfo1 from '../../images/murder-mystery/eosj/shared-info1.png';
import sharedInfo2 from '../../images/murder-mystery/eosj/shared-info2.png';
import sharedInfo3 from '../../images/murder-mystery/eosj/shared-info3.png';
import sharedInfo4 from '../../images/murder-mystery/eosj/shared-info4.png';
import comYourInfo1 from '../../images/murder-mystery/eosj/com/your-info1.png';
import comYourInfo2 from '../../images/murder-mystery/eosj/com/your-info2.png';
import msaYourInfo1 from '../../images/murder-mystery/eosj/msa/your-info1.png';
import msaYourInfo2 from '../../images/murder-mystery/eosj/msa/your-info2.png';
import msbYourInfo1 from '../../images/murder-mystery/eosj/msb/your-info1.png';
import msbYourInfo2 from '../../images/murder-mystery/eosj/msb/your-info2.png';
import psYourInfo1 from '../../images/murder-mystery/eosj/ps/your-info1.png';
import psYourInfo2 from '../../images/murder-mystery/eosj/ps/your-info2.png';
// --- com ---
import comO2Item1 from '../../images/murder-mystery/eosj/com/o2/item1.png';
import comO2Info1 from '../../images/murder-mystery/eosj/com/o2/info1.png';
import comO2Info2 from '../../images/murder-mystery/eosj/com/o2/info2.png';
import comLaboInfo1 from '../../images/murder-mystery/eosj/com/labo/info1.png';
import comStorageInfo1 from '../../images/murder-mystery/eosj/com/storage/info1.png';
import comNaviInfo1 from '../../images/murder-mystery/eosj/com/navi/info1.png';
import comCommInfo1 from '../../images/murder-mystery/eosj/com/comm/info1.png';
// --- msa ---
import msaO2Info1 from '../../images/murder-mystery/eosj/msa/o2/info1.png';
import msaLaboInfo1 from '../../images/murder-mystery/eosj/msa/labo/info1.png';
import msaStorageInfo1 from '../../images/murder-mystery/eosj/msa/storage/info1.png';
import msaStorageInfo2 from '../../images/murder-mystery/eosj/msa/storage/info2.png';
import msaNaviInfo1 from '../../images/murder-mystery/eosj/msa/navi/info1.png';
import msaCommInfo1 from '../../images/murder-mystery/eosj/msa/comm/info1.png';
import msaCommInfo2 from '../../images/murder-mystery/eosj/msa/comm/info2.png';
// -- msb ---
import msbO2Info1 from '../../images/murder-mystery/eosj/msb/o2/info1.png';
import msbO2Info2 from '../../images/murder-mystery/eosj/msb/o2/info2.png';
import msbO2Info3 from '../../images/murder-mystery/eosj/msb/o2/info3.png';
import msbLaboInfo1 from '../../images/murder-mystery/eosj/msb/labo/info1.png';
import msbStorageItem1 from '../../images/murder-mystery/eosj/msb/storage/item1.png';
import msbStorageInfo1 from '../../images/murder-mystery/eosj/msb/storage/info1.png';
import msbStorageInfo2 from '../../images/murder-mystery/eosj/msb/storage/info2.png';
import msbNaviInfo1 from '../../images/murder-mystery/eosj/msb/navi/info1.png';
import msbCommInfo1 from '../../images/murder-mystery/eosj/msb/comm/info1.png';
import msbCommInfo2 from '../../images/murder-mystery/eosj/msb/comm/info2.png';
// --- ps ---
import psO2Info1 from '../../images/murder-mystery/eosj/ps/o2/info1.png';
import psLaboInfo1 from '../../images/murder-mystery/eosj/ps/labo/info1.png';
import psLaboInfo2 from '../../images/murder-mystery/eosj/ps/labo/info2.png';
import psStorageItem1 from '../../images/murder-mystery/eosj/ps/storage/item1.png';
import psStorageInfo1 from '../../images/murder-mystery/eosj/ps/storage/info1.png';
import psNaviInfo1 from '../../images/murder-mystery/eosj/ps/navi/info1.png';
import psCommInfo1 from '../../images/murder-mystery/eosj/ps/comm/info1.png';
import psCommInfo2 from '../../images/murder-mystery/eosj/ps/comm/info2.png';

interface IState {
  greenBack: boolean;
  role: string;
  docType: string;
  url: string;
  room: string;
}

export default class EndOfSpaceJourney extends React.Component<{}, IState> {
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
    const contentClass = classNames('mm-eosj__content-image', {
      'green-back': this.state.greenBack
    });

    let roleName = '';
    switch (this.state.role) {
      case 'Com':
        roleName = "コマンダー"
        break;
      case 'MSA':
        roleName = "MS(A)"
        break;
      case 'MSB':
        roleName = "MS(B)"
        break;
      case 'PS':
        roleName = 'PS'
        break;
      default:
        break;
    }

    let Image;
    if (this.state.url === '') {
      Image = <p>ここに画像が表示されます。</p>;
    } else if (this.state.docType === 'always') {
      // 悲しいかな時間がないのでむちゃくちゃだけど回避
      switch (this.state.url) {
        case 'prologue1':
          Image = <img src={prologue1} />;
          break;
        case 'selectRole':
          Image = <img src={selectRole} />;
          break;
        case 'prologue2':
          Image = <img src={prologue2} />;
          break;
        case 'map':
          Image = <img src={map} />;
          break;
        case 'sharedInfo1':
          Image = <img src={sharedInfo1} />;
          break;
        case 'sharedInfo2':
          Image = <img src={sharedInfo2} />;
          break;
        case 'sharedInfo3':
          Image = <img src={sharedInfo3} />;
          break;
        case 'sharedInfo4':
          Image = <img src={sharedInfo4} />;
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
            Image = <img src={comYourInfo1} />;
            break;
          case 'yourInfo2':
            Image = <img src={comYourInfo2} />;
            break;
        }
      }
      else if (this.state.role === 'MSA') {
        switch(this.state.url) {
          case 'yourInfo1':
            Image = <img src={msaYourInfo1} />;
            break;
          case 'yourInfo2':
            Image = <img src={msaYourInfo2} />;
            break;
        }
      }
      else if (this.state.role === 'MSB') {
        switch(this.state.url) {
          case 'yourInfo1':
            Image = <img src={msbYourInfo1} />;
            break;
          case 'yourInfo2':
            Image = <img src={msbYourInfo2} />;
            break;
        }
      }
      else if (this.state.role === 'PS') {
        switch(this.state.url) {
          case 'yourInfo1':
            Image = <img src={psYourInfo1} />;
            break;
          case 'yourInfo2':
            Image = <img src={psYourInfo2} />;
            break;
        }
      }
    } else if (this.state.docType === 'perRoom') {
      if (this.state.room === 'o2') {
        if (this.state.role === 'Com') {
          switch(this.state.url) {
            case 'item1':
              Image = <img src={comO2Item1} />;
              break;
            case 'info1':
              Image = <img src={comO2Info1} />;
              break;
            case 'info2':
              Image = <img src={comO2Info2} />;
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
              Image = <img src={msaO2Info1} />;
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
              Image = <img src={msbO2Info1} />;
              break;
            case 'info2':
              Image = <img src={msbO2Info2} />;
              break;
            case 'info3':
              Image = <img src={msbO2Info3} />;
              break;
          }
        } else if (this.state.role === 'PS') {
          switch(this.state.url) {
            case 'item1':
              Image = <p>アイテムはありません。</p>;
              break;
            case 'info1':
              Image = <img src={psO2Info1} />;
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
              Image = <img src={comLaboInfo1} />;
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
              Image = <img src={msaLaboInfo1} />;
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
              Image = <img src={msbLaboInfo1} />;
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
              Image = <img src={psLaboInfo1} />;
              break;
            case 'info2':
              Image = <img src={psLaboInfo2} />;
              break;
            case 'info3':
              Image = <p>情報3はありません。</p>;
              break;
          }
        }
      } else if (this.state.room === 'storage') {
        if (this.state.role === 'Com') {
          switch(this.state.url) {
            case 'item1':
              Image = <p>アイテムはありません。</p>;
              break;
            case 'info1':
              Image = <img src={comStorageInfo1} />;
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
              Image = <img src={msaStorageInfo1} />;
              break;
            case 'info2':
              Image = <img src={msaStorageInfo2} />;
              break;
            case 'info3':
              Image = <p>情報3はありません。</p>;
              break;
          }
        } else if (this.state.role === 'MSB') {
          switch(this.state.url) {
            case 'item1':
              Image = <img src={msbStorageItem1} />;
              break;
            case 'info1':
              Image = <img src={msbStorageInfo1} />;
              break;
            case 'info2':
              Image = <img src={msbStorageInfo2} />;
              break;
            case 'info3':
              Image = <p>情報3はありません。</p>;
              break;
          }
        } else if (this.state.role === 'PS') {
          switch(this.state.url) {
            case 'item1':
              Image = <img src={psStorageItem1} />;
              break;
            case 'info1':
              Image = <img src={psStorageInfo1} />;
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
              Image = <img src={comNaviInfo1} />;
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
              Image = <img src={msaNaviInfo1} />;
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
              Image = <img src={msbNaviInfo1} />;
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
              Image = <img src={psNaviInfo1} />;
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
              Image = <p>アイテムはありません。</p>;
              break;
            case 'info1':
              Image = <img src={comCommInfo1} />;
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
              Image = <img src={msaCommInfo1} />;
              break;
            case 'info2':
              Image = <img src={msaCommInfo2} />;
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
              Image = <img src={msbCommInfo1} />;
              break;
            case 'info2':
              Image = <img src={msbCommInfo2} />;
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
              Image = <img src={psCommInfo1} />;
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
      <div className='mm-eosj'>
        <div className="mm-eosj__key-visual">
          <h2>スペースジャーニーの結末</h2>
        </div>
        <div className="mm-eosj__description">
          以下、GM の指示があったらボタンを押してください。<br />
          配信する場合は&nbsp;
          <button onClick={this.ToggleGreenBack}>
            グリーンバック
          </button>
          &nbsp;を押し、緑が全部入るように画面を調整してください。
        </div>
        <hr />
        <div className="mm-eosj__content">
          <div className="mm-eosj__content-layout">
            <div className={contentClass}>
              {Image}
            </div>
            <div className="mm-eosj__content-actions">
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
                <button className={this.GetClass('sharedInfo4')} onClick={() => this.SetImage('always', 'sharedInfo4')}>
                  共有情報4
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
              </section>
              <hr />
              <section>
                <p>ここのボタンは部屋を移動したら押すことができます。</p>
                <button className={this.GetRoomClass('o2')} onClick={() => this.SetRoom('o2')}>
                  酸素制御室
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
