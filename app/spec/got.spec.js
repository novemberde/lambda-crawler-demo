const got = require('got');

got('https://www.naver.com').then(res => {
  console.log(res.body);
});
got("POST_URL", {
  method: "post",
  body: JSON.stringify({text: "hi"})
})