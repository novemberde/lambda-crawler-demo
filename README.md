# lambda-crawler-demo
Crawler demo using Node + AWS Lambda + AWS CloudWatch + Tor + Slack

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

```sh
$ npx serverless deploy
```