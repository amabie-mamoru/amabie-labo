import React from 'react';
import '../styles/Index.scss';
import amabie from '../images/amabie.png';
import murder_mystery from '../images/murder-mystery-work-list-banner.png';
import classNames from 'classnames';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

class Index extends React.Component {
  state = { isVisibleMessage: false, task: () => {} };

  componentDidMount() {
    this.state.task = setInterval(() => {
      this.setState({ isVisibleMessage: true });
    }, 3300);
  }

  componentWillUnmount() {
    clearInterval(this.state.task);
  }

  render () {
    const charaMessage = classNames('index__chara-message', {
      'visible': this.state.isVisibleMessage
    })

    return (
      <div className="index">
        <section>
          <img className="index__chara-image" src={amabie} />
          <div className={charaMessage}>
            <div className="index__chara-message-frame">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.pauseFor(3300)
                    .typeString(
                      'こんびえ〜🧜‍♂️<br />'
                    )
                    .typeString(
                      '<ruby>天日江<rt>あまびえ</rt>&nbsp;護<rt>　まもる</rt></ruby>です！<br />'
                    )
                    .typeString(
                      'ここには僕の作ったものが公開されていきます！<br />'
                    )
                    .typeString(
                      '是非遊んでいってくださいね🐳'
                    )
                    .start();
                }} />
            </div>
          </div>
        </section>
        <section>
          <h2 className="index__work-list-h2">作品一覧</h2>
          <div className="index__work-list--murder-mystery">
            <Link to="/murder_mystery">
              <img src={murder_mystery} />
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default Index;
