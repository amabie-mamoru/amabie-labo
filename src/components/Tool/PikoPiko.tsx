import React from 'react';
import '../../styles/Tool/Base.scss';
import { Link } from 'react-router-dom';
import img_pikopiko_obs_x_discord from '../../images/tool/pikopiko-obs-x-discord.png';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import classNames from 'classnames';

interface IState {
  name: string;
  id: string;
  imgUrl: string;
  rawCode: string;
  registeredHash: any;
  isEdit: boolean;
  isCopied: boolean;
  isDeleted: boolean;
}

export default class PikoPiko extends React.Component<{}, IState> {
  private textAreaRef: React.RefObject<HTMLTextAreaElement>;
  private nameRef: React.RefObject<HTMLInputElement>;
  private idRef: React.RefObject<HTMLInputElement>;
  private imgUrlRef: React.RefObject<HTMLInputElement>;
  private registeredRef: React.RefObject<HTMLInputElement>;

  constructor (props: any) {
    super(props);
    this.state = {
      name: '',
      id: '',
      imgUrl: '',
      rawCode: DefaultCode(),
      registeredHash: {},
      isEdit: false,
      isCopied: false,
      isDeleted: false
    };
    this.HandleChange = this.HandleChange.bind(this);
    this.HandleTextAreaChange = this.HandleTextAreaChange.bind(this);
    this.RegenerateCode = this.RegenerateCode.bind(this);
    this.RegenerateCodeImmediately = this.RegenerateCodeImmediately.bind(this);
    this.EditBtnClick = this.EditBtnClick.bind(this);
    this.RegisterToHash = this.RegisterToHash.bind(this);
    this.RemoveToHash = this.RemoveToHash.bind(this);
    this.SelectKey = this.SelectKey.bind(this);
    this.AlreadyRegistered = this.AlreadyRegistered.bind(this);
    this.CopyToClipboard = this.CopyToClipboard.bind(this);
    this.Stringify = this.Stringify.bind(this);
    this.ToJson = this.ToJson.bind(this);
    this.DownloadJson = this.DownloadJson.bind(this);
    this.UploadJson = this.UploadJson.bind(this);

    this.textAreaRef = React.createRef();
    this.nameRef = React.createRef();
    this.idRef = React.createRef();
    this.imgUrlRef = React.createRef();
    this.registeredRef = React.createRef();

    const record = localStorage.getItem('records')
    if (record === undefined || record === null) { return; }
    const memory = this.ToJson(record);
    this.state = {
      name: '',
      id: '',
      imgUrl: '',
      rawCode: memory.rawCode,
      registeredHash: memory.registeredHash,
      isEdit: false,
      isCopied: false,
      isDeleted: false
    };
  }

  HandleChange (type: string, e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState(state => ({
      name: type === 'name' ? e.target.value : state.name,
      id: type === 'id' ? e.target.value : state.id,
      imgUrl: type === 'imgUrl' ? e.target.value : state.imgUrl,
      rawCode: state.rawCode,
      registeredHash: state.registeredHash,
      isEdit: state.isEdit,
      isCopied: state.isCopied,
      isDeleted: state.isDeleted
    }));
    // setState の反映は Lifecycle 的にまだなので e を渡す
    if (type === 'isEdit' || this.state.isEdit) {
      this.EditCode(type, e);
    } else {
      this.RegenerateCode(type, e.target.value);
    }
  }

  HandleTextAreaChange (e: React.ChangeEvent<HTMLTextAreaElement>): void {
    this.setState(state => ({
      name: state.name,
      id: state.id,
      imgUrl: state.imgUrl,
      rawCode: e.target.value,
      registeredHash: state.registeredHash,
      isEdit: state.isEdit,
      isCopied: state.isCopied,
      isDeleted: state.isDeleted
    }))
  }

  RegenerateCode (type: string, value: string) {
    let code = this.state.rawCode;
    const id = type === 'id' ? value === '' ? '##ID##' : value : this.state.id === '' ? '##ID##' : this.state.id;
    const imgUrl = type === 'imgUrl' ? value === '' ? '##URL##' : value : this.state.imgUrl === '' ? '##URL##' : this.state.imgUrl;
    if (this.textAreaRef === null || this.textAreaRef.current === null) return;
    this.textAreaRef.current.value = code.replace('##ID##', id).replace('##URL##', imgUrl);
  }

  RegenerateCodeImmediately (id: string, imgUrl: string) {
    let code = this.state.rawCode;
    if (this.textAreaRef === null || this.textAreaRef.current === null) return;
    this.textAreaRef.current.value = code.replace('##ID##', id).replace('##URL##', imgUrl);
  }

  EditCode(type: string, e: React.ChangeEvent<HTMLInputElement>) {
    if (this.textAreaRef === null || this.textAreaRef.current === null) return;
    this.textAreaRef.current.value = this.state.rawCode;
  }

  EditBtnClick() {
    if (this.textAreaRef === null || this.textAreaRef.current === null) return;
    this.setState(state => ({
      name: state.name,
      id: state.id,
      imgUrl: state.imgUrl,
      rawCode: state.rawCode,
      registeredHash: state.registeredHash,
      isEdit: !state.isEdit,
      isCopied: state.isCopied,
      isDeleted: state.isDeleted
    }));
    this.textAreaRef.current.readOnly = !this.state.isEdit;
    if (!this.state.isEdit) {
      this.textAreaRef.current.value = this.state.rawCode;
    } else {
      this.RegenerateCode('', this.state.rawCode);
    }
    localStorage.setItem('records', this.Stringify(this.state.registeredHash));
  }

  RegisterToHash() {
    const record = {
      id: this.state.id,
      imgUrl: this.state.imgUrl
    };
    let records = this.state.registeredHash;
    records[this.state.name] = record
    this.setState(state => ({
      name: state.name,
      id: state.id,
      imgUrl: state.imgUrl,
      rawCode: state.rawCode,
      registeredHash: records,
      isEdit: state.isEdit,
      isCopied: state.isCopied,
      isDeleted: state.isDeleted
    }));
    localStorage.setItem('records', this.Stringify(records));
  }

  RemoveToHash(): void {
    // ほんとは react-modal 使ってワンクッションおいたほうがいいけどそんな需要なさそうだし一旦いらんか
    let records = this.state.registeredHash;
    delete records[this.state.name];
    this.setState(state => ({
      name: state.name,
      id: state.id,
      imgUrl: state.imgUrl,
      rawCode: state.rawCode,
      registeredHash: records,
      isEdit: state.isEdit,
      isCopied: state.isCopied,
      isDeleted: true
    }));
    localStorage.setItem('records', this.Stringify(records));
    setTimeout(() => {
      this.setState(state => ({
        name: state.name,
        id: state.id,
        imgUrl: state.imgUrl,
        rawCode: state.rawCode,
        registeredHash: state.registeredHash,
        isEdit: state.isEdit,
        isCopied: state.isCopied,
        isDeleted: false
      }));
    }, 3000);
  }

  SelectKey (e: React.ChangeEvent<HTMLInputElement>): void {
    const value = e.target.value;
    if (this.state.registeredHash[value] === undefined) { return; }
    this.setState(state => ({
      name: value,
      id: state.registeredHash[value].id,
      imgUrl: state.registeredHash[value].imgUrl,
      rawCode: state.rawCode,
      registeredHash: state.registeredHash,
      isEdit: state.isEdit,
      isCopied: state.isCopied,
      isDeleted: state.isDeleted
    }));
    if (this.nameRef === null || this.nameRef.current === null) return;
    this.nameRef.current.value = value;
    if (this.idRef === null || this.idRef.current === null) return;
    this.idRef.current.value = this.state.registeredHash[value].id;
    if (this.imgUrlRef === null || this.imgUrlRef.current === null) return;
    this.imgUrlRef.current.value = this.state.registeredHash[value].imgUrl;
    if (this.textAreaRef === null || this.textAreaRef.current === null) return;
    this.textAreaRef.current.value = this.state.rawCode;
    this.RegenerateCodeImmediately(this.state.registeredHash[value].id, this.state.registeredHash[value].imgUrl);
    if (this.registeredRef === null || this.registeredRef.current === null) return;
    this.registeredRef.current.value = '';
  }

  AlreadyRegistered(isStrictMatch: boolean): boolean {
    if (this.state.registeredHash === undefined || this.state.registeredHash === {}) { return false; }
    if (this.state.registeredHash[this.state.name] === undefined || this.state.registeredHash[this.state.name] === null) { return false; }
    // ここで this.state.registeredHash[this.name] !== null なので key だけ確認するならここまで。
    if (!isStrictMatch) { return true; }
    if (this.state.registeredHash[this.state.name].id !== this.state.id) { return false; }
    return this.state.registeredHash[this.state.name].imgUrl === this.state.imgUrl;
  }

  CopyToClipboard(): void {
    if (this.textAreaRef === null || this.textAreaRef.current === null) return;
    const ref = this.textAreaRef.current;
    ref.select();
    document.execCommand("copy");
    this.setState(state => ({
      name: state.name,
      id: state.id,
      imgUrl: state.imgUrl,
      rawCode: state.rawCode,
      registeredHash: state.registeredHash,
      isEdit: state.isEdit,
      isCopied: true,
      isDeleted: state.isDeleted
    }));
    setTimeout(() => {
      this.setState(state => ({
        name: state.name,
        id: state.id,
        imgUrl: state.imgUrl,
        rawCode: state.rawCode,
        registeredHash: state.registeredHash,
        isEdit: state.isEdit,
        isCopied: false,
        isDeleted: state.isDeleted
      }));
    }, 3000);
  }

  Stringify(records: string): string {
    if (this.state.registeredHash === undefined || this.state.registeredHash === {}) { return ''; }
    const json = {
      registeredHash: records,
      rawCode: this.state.rawCode
    }
    return JSON.stringify(json);
  }

  ToJson(value: string): any {
    return JSON.parse(value);
  }

  DownloadJson(): void {
    const record = localStorage.getItem('records')
    if (record === undefined || record === null) { return; }
    const data = this.ToJson(record);
    const blob = new Blob([JSON.stringify(data, null, '  ')], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'pikopiko-generate-tool.json';
    link.click();
    URL.revokeObjectURL(url);
  }

  UploadJson(e: React.ChangeEvent<HTMLInputElement>): void {
    if (e === undefined || e.target === undefined || e.target.files === undefined) { return; }
    if (e === null || e.target === null || e.target.files === null) { return; }
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      if (reader.result === undefined || reader.result === null) { return; }
      const result: string = reader.result as string;
      const memory = this.ToJson(result);
      this.setState(state => ({
        name: '',
        id: '',
        imgUrl: '',
        rawCode: memory.rawCode,
        registeredHash: memory.registeredHash,
        isEdit: false,
        isCopied: false,
        isDeleted: false
      }));
      localStorage.setItem('records', this.Stringify(memory.registeredHash))
    }
    reader.readAsText(file);
  }

  render () {
    const textAreaClassName = classNames('t-pikopiko-code-textarea', {
      'is-edit' : this.state.isEdit
    });
    return (
      <div className="t-pikopiko">
        <Head />
        <h2>ピコピコを楽に生成ツール</h2>
        <section className="t-pikopiko-section">
          <section className="t-pikopiko-input">
            <section className="t-pikopiko-input-field">
              <h3>新規</h3>
              <ul>
                <li><input type="text" placeholder="登録名" onChange={this.HandleChange.bind(this, 'name')} ref={this.nameRef} /></li>
                <li><input type="text" placeholder="ID" onChange={this.HandleChange.bind(this, 'id')} ref={this.idRef} /></li>
                <li><input type="text" placeholder="画像URL" onChange={this.HandleChange.bind(this, 'imgUrl')} ref={this.imgUrlRef} /></li>
              </ul>
              <button className='t-pikopiko-input-register-btn' onClick={this.RegisterToHash} disabled={this.AlreadyRegistered(true)}>{ this.AlreadyRegistered(false) ? '登録済みリストを更新' : '登録済みリストに追加'}</button>
              <button onClick={this.RemoveToHash} disabled={!this.AlreadyRegistered(true)}>削除</button>
              {this.state.isDeleted ? <span className="t-pikopiko-input-deleted">🧜‍♂️&lt;(消したで)</span> : ''}
            </section>
            <section className="t-pikopiko-input-candidate">
              <h3>登録済み</h3>
              <div className="t-pikopiko-input-candidate-input">
                <input type="text" list="registered" onChange={this.SelectKey.bind(this)} ref={this.registeredRef} />
                  {(() => {
                    if (this.state.registeredHash === undefined) {
                      return <datalist id="registered" />;
                    }
                    return (
                      <datalist id="registered">
                        {Object.keys(this.state.registeredHash).map((k, index) => {
                          return <option value={k} key={index}></option>
                        })}
                      </datalist>
                    );
                  })()}
              </div>
              <div className="t-pikopiko-input-candidate-register">
                <section>
                  <button onClick={this.DownloadJson.bind(this)}>データをDLする</button>
                  <button><label htmlFor="upload">データをアップする</label></button>
                  <input className="t-pikopiko-input-candidate-register-upload-input" type="file" id="upload" onChange={this.UploadJson.bind(this)} />
                </section>
              </div>
            </section>
          </section>
          <section className="t-pikopiko-preview">
            <h3>プレビュー</h3>
            <div className="t-pikopiko-preview-section">
              <img className="t-pikopiko-preview-img" src={this.state.imgUrl} alt={this.state.imgUrl === '' ? '' : 'URLが間違っているかURLの画像が削除された可能性があります'} />
            </div>
          </section>
          <section className="t-pikopiko-code">
            <section className="t-pikopiko-code-h">
              <h3>生成コード</h3>
              <div className="t-pikopiko-code-clipboard">
      {this.state.isCopied ? <span className="t-pikopiko-code-clipboard-copied">(コピーしたで)&gt;🧜‍♂️</span> : ''}
                <button onClick={this.CopyToClipboard.bind(this)}>CSSをクリップボードにコピー</button>
              </div>
            </section>
            <section>
              <p>自由に編集可能です。</p>
              <p>ただし、IDを入れるところは「##ID##」、画像URLを入れるところは「##URL##」と書いてください</p>
              <div className="t-pikopiko-code-edit">
                <button onClick={this.EditBtnClick}>{ !this.state.isEdit ? 'CSSを編集する' : 'CSSを編集を完了する' }</button>
              </div>
            </section>
            <textarea className={textAreaClassName}
                      defaultValue={this.state.rawCode}
                      placeholder='基本自動生成ですが、編集可能です。'
                      onChange={this.HandleTextAreaChange.bind(this)}
                      ref={this.textAreaRef}
                      readOnly={!this.state.isEdit}
            />
          </section>
        </section>

        <BackButton />
      </div>
    );
  }
}

const DefaultCode = () => {
  return `li.voice-state:not([data-reactid*="##ID##"]) { display:none; }
.avatar {
  content:url(##URL##);
  width:auto !important;
  height:auto !important;
  border-radius:0% !important;
  filter: brightness(50%);
}

.speaking {
  border-color:rgba(0,0,0,0) !important;
  filter: brightness(100%);
  border-color:rgba(0,0,0,0) !important;
  position:relative;
  animation-name: speak-now;
  animation-duration: 1s;
  animation-fill-mode:forwards;
}

@keyframes speak-now {
  0% { bottom:0px;  }
  15% { bottom:10px;  }
  30% { bottom:0px;  }
}

li.voice-state{ position: static; }
div.user{ position: absolute; left:40%; bottom:5%; }

body { background-color: rgba(0, 0, 0, 0); margin: 0px auto; overflow: hidden; }`;
}

const BackButton: React.FC = () => {
  return (
    <div className="t-pikopiko-back-button">
      <Link to='/tool'>
        &lt; 戻る
      </Link>
    </div>
  );
}

const Head: React.FC = () => {
  const title = 'ピコピコを楽に生成ツール';
  const type = 'website';
  const img = `https://amabie-labo.com${img_pikopiko_obs_x_discord}`;
  const url = 'https://amabie-labo.com/tool/pikopiko';
  const description = 'ピコピコを楽に生成するためのツールです';
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
