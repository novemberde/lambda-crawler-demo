# lambda-crawler-demo
Crawler demo using Node + AWS Lambda + AWS CloudWatch + Slack

[Guide(KR)](https://novemberde.github.io/node/2017/12/31/Node-crawler.html)

## Requirements

- npm >= 5.0
- AWS Command line interface

## How to?

```sh
$ npm install
$ cd app && npm install
```

add slack.config.json in app directory.

[app/slack.config.json]
```json
{
  "URL": "Your slack incoming url"
}
```

finally,

```sh
$ npx serverless deploy
```

## LICENSE

[MIT LICENSE](/LICENSE)