# lambda-crawler-demo
Crawler demo using Node + AWS Lambda + AWS CloudWatch + Slack

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