# ChatGPT plugins 

## Setup

### 事前セットアップ
goenvを使ってGOのバージョン管理をしています。
以下のサイトを参考に導入してください。

https://qiita.com/MasanoriIwakura/items/bc8c20d3a0ba7d21262b

### セットアップ

指定されたGOをインストールする
```bash
goenv install
```

実行する
```
./main serve --indexFallback=true
```

ChatGPTでプラグインとして利用する

1. Navigate to https://chat.openai.com. 
2. In the Model drop down, select "Plugins" (note, if you don't see it there, you don't have access yet).
3. Select "Plugin store"
4. Select "Develop your own plugin"
5. Enter in `localhost:8090` since this is the URL the server is running on locally, then select "Find manifest file".

The plugin should now be installed and enabled! You can start with a question like "What is on my todo list" and then try adding something to it as well! 
