const got = require('got');
const cheerio = require('cheerio');

got('https://www.naver.com').then(res => {
  $ = cheerio.load(res.body);

  const result = $('.ca_item .ca_a');

  console.log(result.text());
});