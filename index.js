const express = require('express');
const pug = require('pug');
const app = express();
const bunnyFacts = require('./facts/facts');


let factIndex = 0;
const compiledFunction = pug.compileFile('./templates/index.pug');

app.get('/', (req, res) => {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end(compiledFunction({fact: bunnyFacts[factIndex++ % bunnyFacts.length]}));
});

app.listen('3000', () => console.log('bunny facts listening on localhost:3000'));