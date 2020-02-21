const Twit = require('twit');
const content = require('./content.js');

let T = new Twit(content)

let x = 0;

let tweetSomething = ()=>{
  if(x < 5){
    T.post('statuses/update', { status: 'Twiteado ' + x }, function(err, data, response) {
      console.log('Twiteado ' + x)
    })
  }  
  setTimeout(()=>{
    x++;

    if(x === 5){
      return;
    }
    tweetSomething();
  },3000)
}

tweetSomething();





