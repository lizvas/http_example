var https = require('https');

console.log('I did it!');

var options = {
  host: 'www.example.org',
  path: '/'
};

// called by https when the request is made.
var callback = function(response) {
  console.log('In response handler callback!');
  console.log('Response: ', response);
}

console.log("I'm about to make the request!");

https.request(options, callback).end();

console.log("I've made the request!");

//notice that console.log order and how it is typed
//in the terminal, it outpts:
// I did it!
// I'm about to make the request!
// I've made the request!
// In response handler callback!
