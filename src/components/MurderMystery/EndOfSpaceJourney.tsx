import React from 'react';
import '../../styles/MurderMystery/EndOfSpaceJourney.scss';
import classNames from 'classnames';
import prologue1 from '../../images/murder-mystery/eosj/prologue1.png';

interface IState {
  greenBack: boolean;
  role: string;
  docType: string;
  url: string;
}

export default class EndOfSpaceJourney extends React.Component<{}, IState> {
  constructor (props: any) {
    super(props);
    this.state = {
      greenBack: false,
      role: '',
      docType: '',
      url: ''
    };
    this.ToggleGreenBack = this.ToggleGreenBack.bind(this);
    this.SetRole = this.SetRole.bind(this);
  }

  ToggleGreenBack () {
    this.setState(state => ({
      greenBack: !state.greenBack,
      role: state.role,
      docType: state.docType,
      url: state.url
    }));
  }

  SetRole (role: string) {
    this.setState(state => ({
      greenBack: state.greenBack,
      role: role,
      docType: state.docType,
      url: state.url
    }));
  }

  SetImage (docType: string, url: string) {
    this.setState(state => ({
      greenBack: state.greenBack,
      role: state.role,
      docType: docType,
      url: url
    }));
  }

  render () {
    const contentClass = classNames('mm-eosj__content-image', {
      'green-back': this.state.greenBack
    });
    let Image;
    if (this.state.url === '') {
      Image = <p>ここに画像が表示されます。</p>;
    } else if (this.state.docType == 'always') {
      // 悲しいかな時間がないのでむちゃくちゃだけど回避
      switch (this.state.url) {
        case 'prologue1':
          Image = <img src={prologue1} />;
          break;
        default:
          break;
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
                <button onClick={() => this.SetImage('always', 'prologue1')}>
                  プロローグ1
                </button>
                <button>
                  役職選択
                </button>
                <button>
                  プロローグ2
                </button>
              </section>
              <hr />
              <section>
                <button>
                  マップ
                </button>
              </section>
              <hr />
              <section>
                <button>
                  共有情報1
                </button>
                <button>
                  共有情報2
                </button>
                <button>
                  共有情報3
                </button>
                <button>
                  共有情報4
                </button>
              </section>
              <hr />
              <section>
                あなたの役職は<br />
                <button onClick={() => this.SetRole('Commander')}>
                  コマンダー
                </button>
                <button onClick={() => this.SetRole('MSA')}>
                  MS(A)
                </button>
                <button onClick={() => this.SetRole('MSB')}>
                  MS(B)
                </button>
                <button onClick={() => this.SetRole('PS')}>
                  PS
                </button>
              </section>
              <hr />
              <section>
                <button>
                  あなたの情報1
                </button>
                <button>
                  あなたの情報2
                </button>
              </section>
              <hr />
              <section>
                <button>
                  酸素制御室
                </button>
                <button>
                  実験室
                </button>
                <button>
                  倉庫
                </button>
                <button>
                  操舵室
                </button>
                <button>
                  通信室
                </button>
              </section>
              <section>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
