<h1 align="center">
  <br>
  <img src="https://github.com/takamt/simple_office_reception_to_slack/assets/25574045/7f11490c-30d2-4f53-967d-40b2a9a974c9">
  <br>
  Simple Office Reception to Slack
  <br>
</h1>

## 概要
- 画面上の来客者の目的を入力するとSlackに通知が来るだけの機能
- インフラ想定
  - API Gateway URL → Lambda (index.js) → Slack Incoming Webhook URL
  - S3等にホスティング (index.html)
- 入用に付き、新幹線内でモックまで

## TODO
- [ ] インフラ構築IaCで
- [ ] 目的に応じて来客者の属性等の付随情報の入力
- [ ] Googleカレンダー等との連携
- [ ] UI拡充

## 参考
- [オフィスで大活躍の自作 Slack＆Google カレンダー連携受付システムを紹介する #Zaim](https://blog.zaim.co.jp/n/n99c83452953b)


