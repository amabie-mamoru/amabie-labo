import React from 'react';
import '../../styles/MysterySolvingGame/BlindGirl.scss';
import { Link } from 'react-router-dom';
import Canvas from '../Canvas';
import blind_girl from '../../images/mystery-solving-game/blind-girl-banner.png';
import Helmet from 'react-helmet';

interface IState {
  missionId: number;
  answer: string;
  message: string;
}

export default class BlindGirl extends React.Component<{}, IState> {
  constructor (props: any) {
    super(props);
    this.state = {
      missionId: 1,
      answer: '',
      message: ''
    };
    this.CompleteMission = this.CompleteMission.bind(this);
    this.GetMissionDom = this.GetMissionDom.bind(this);
    this.HandleChange = this.HandleChange.bind(this);
    this.Answer = this.Answer.bind(this);
  }

  CompleteMission () {
    this.setState(state => ({
      missionId: state.missionId + 1,
      answer: '',
      message: ''
    }));
  }

  HandleChange (e: React.ChangeEvent<HTMLInputElement>) {
    this.setState(state => ({
      missionId: state.missionId,
      answer: e.target.value,
      message: ''
    }));
  }

  WrongAnswer () {
    this.setState(state => ({
      missionId: state.missionId,
      answer: state.answer,
      message: '不正解です。もう一度考えてください。'
    }));
  }

  Answer() {
    let correct;
    switch (this.state.missionId) {
      case 1:
        [/^西白/i, /^にししろ/i, /^nishishiro/i, /^nisisiro/i].forEach((keyword) => {
          if (this.state.answer.match(keyword)) {
            correct = true;
            return;
          }
        });
        break;
      case 2:
        [/^めーる$/, /^メール$/, /^手紙$/, /^てがみ$/, /^me-ru$/i, /^mail$/i, /^email$/i, /^e-mail$/i].forEach((keyword) => {
          if (this.state.answer.match(keyword)) {
            correct = true;
            return;
          }
        });
        break;
      case 3:
        [/^また[星☆★][がを]*[み見観]たい$/, /^matahoshi(ga|wo)*mitai$/i, /^matahosi(ga|wo)*mitai$/].forEach((keyword) => {
          if (this.state.answer.match(keyword)) {
            correct = true;
            return;
          }
        });
        break;
      case 4:
        [/電話/, /tell/i, /call/i, /den[n]*wa/i,].forEach((keyword) => {
          if (this.state.answer.match(keyword)) {
            correct = true;
            return;
          }
        });
        break;
      default:
        break;
    }
    correct ? this.CompleteMission() : this.WrongAnswer()
  }

  GetMissionDom () {
    let mission;
    const missionClass = 'msg-bg__mission';

    switch (this.state.missionId) {
      case 1:
        mission = <div>
                    <p className={missionClass}>彼女は最終的にどこにたどり着きましたか？</p>
                    <input type="text" placeholder="場所" onChange={this.HandleChange} value={this.state.answer} />
                    <button onClick={this.Answer}>回答する</button>
                    <p className="msg-bg__mission--wrong">{this.state.message}</p>
                  </div>;
        break;
      case 2:
        mission = <div>
                    <p className={missionClass}>
                      彼女は今日 1 日の不可解な行動を通して浮かび上がる何かを見てほしいかったようです。<br />
                      それは何でしょうか？
                    </p>
                    <input type="text" placeholder="浮かび上がったもの" onChange={this.HandleChange} value={this.state.answer} />
                    <button onClick={this.Answer}>回答する</button>
                    <p className="msg-bg__mission--wrong">{this.state.message}</p>
                  </div>;
        break;
      case 3:
        mission = <div>
                    <p className={missionClass}>
                      その通り。メールを見て欲しかったようです。<br />
                      実際にみてみると『２−１』という謎のメッセージが送られてきていた。<br />
                      これが示す彼女が本当に伝えたかったメッセージは何でしょう？
                    </p>
                    <input type="text" placeholder="メッセージ" onChange={this.HandleChange} value={this.state.answer} />
                    <button onClick={this.Answer}>回答する</button>
                    <p className="msg-bg__mission--wrong">{this.state.message}</p>
                  </div>;
        break;
      case 4:
        mission = <div>
                    <p className={missionClass}>
                    その通り。<br />
                    彼女は明日の手術を失敗したときの恐怖からこのメッセージを残したようです。<br />
                    そんな引っ込み思案な彼女にどうにかエールを送ることはできないでしょうか？
                    </p>
                    <input type="text" placeholder="◯◯に××する" onChange={this.HandleChange} value={this.state.answer} />
                    <button onClick={this.Answer}>回答する</button>
                    <p className="msg-bg__mission--wrong">{this.state.message}</p>
                  </div>;
        break;
      case 5:
        mission = <div>
                    <p className={missionClass}>謎解き成功です！<br />おめでとうございます🎉</p>
                    <p>※ GM に謎解き成功を伝えてください。</p>
                  </div>;
        break;
      default:
        break;
    }
    return mission;
  }

  render () {
    const missionHeader = this.state.missionId <= 4 ? `ミッション (${this.state.missionId}/4)` : 'ミッション達成🎉';

    return (
      <div className="msg-bg">
        <Head />
        <div className="msg-bg__key-visual">
          <h2>盲目少女の奇妙な一日</h2>
        </div>
        <div className="msg-bg__missions">
          <h3>{missionHeader}</h3>
          {this.GetMissionDom()}
        </div>
        <hr />
        <div className="msg-bg__map">
          <p>以下はマップです。ミッションを達成するために活用してください。</p>
          <Canvas width={800} height={600} />
        </div>
        <div className="back-button">
          <Link to='/mystery_solving_game'>
            &lt; 戻る
          </Link>
        </div>
      </div>
    );
  }
}

const Head: React.FC = () => {
  const title = '盲目少女の奇妙な一日';
  const type = 'website';
  const img = `https://amabie-labo.com${blind_girl}`;
  const url = 'https://amabie-labo.com/mystery_solving_game/blind_girl';
  const description = '盲目少女の奇妙な一日プレイ用ツールです';
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
