# 初期作成手順

## nodejs の最新情報を確認

今回は Stable は利用できない

理由は開発環境が Apple Silicon (M1 Chip) Machine を使っているから。

詳細→ [Apple Silicon (M1) で Firebase Hosting を使おうとしたら firebase login で失敗した話を解決する](https://qiita.com/amabie-mamoru/items/8c624d0eb9b774a3acf9)

## nvm を使って nodejs をインストール

直接バージョン指定するなら .node-version いらんのだが、他のパッケージマネージャー使う人向けに `.node-version` は追加する

```zsh
echo "v15.14.0" > .node-version
nvm install v15.14.0
```

## create-react-app をベースに作る

思想の基本としてコピペコードは不明確な実装を増やすだけで一時的な高速サービス提供が可能となってもメンテナンスリスクの向上やバグ発生時の対処速度に大きく差が出る

そのため、公式サイトの情報を参考に他サイトを参考にして理解できたものだけ自分のコードに落とし込む

今回は作り慣れている react / redux で作成予定だが、しばらくフロントエンドを離れていることもあって変わった部分も多々あると思われるので、 [https://ja.reactjs.org/docs/create-a-new-react-app.html](https://ja.reactjs.org/docs/create-a-new-react-app.html) を参考に進める

```zsh
npx create-react-app amabie-labo --template typescript
mv -f amabie-labo/* .
mv amabie-labo/.gitignore .
rm -rf amabie-labo
```

## 動作確認

一通り動作確認

```zsh
npm run start
npm run build
npm run test
```

